import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput, 
  IonSelect, IonSelectOption, ToastController 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseService, IFormulario } from '../services/database.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonButton, IonItem, IonInput, IonSelect, IonSelectOption
  ]
})
export class FormularioPage {
  formData: IFormulario = {
    usuario: '',
    contrasena: '',
    matricula: '',
    conocimientosProgramacion: ''
  };

  constructor(
    private router: Router,
    private toastController: ToastController,
    private database: DatabaseService
  ) {}

  async guardarDatos() {
    // Validación de campos vacíos
    if (
      !this.formData.usuario || 
      !this.formData.contrasena || 
      !this.formData.matricula || 
      !this.formData.conocimientosProgramacion
    ) {
      await this.mostrarToast('Debes llenar todos los campos', 'warning');
      return;
    }

    // Validación de longitud de contraseña
    if (this.formData.contrasena.length !== 8) {
      await this.mostrarToast('La contraseña debe tener exactamente 8 caracteres', 'warning');
      return;
    }

    // Validación de usuario existente
    try {
      const usuarioExistente = await this.database.validarUsuarioExistente(this.formData.usuario);
      if (usuarioExistente) {
        await this.mostrarToast('Este usuario ya existe', 'warning');
        return;
      }

      // Guardado de datos si el usuario no existe
      await this.database.guardarFormulario(this.formData);
      const toast = await this.mostrarToast('Datos guardados correctamente', 'success');
      
      toast.onDidDismiss().then(() => {
        this.router.navigate(['/home']);
      });

      this.limpiarFormulario();
    } catch (error) {
      await this.mostrarToast('Error al guardar los datos', 'danger');
    }
  }

  private async mostrarToast(mensaje: string, color: 'success' | 'danger' | 'warning') {
    const configToast: any = {
      message: mensaje,
      color: color,
      position: 'bottom',
      cssClass: 'toast-full-width',
      duration: color === 'success' ? undefined : 2000
    };

    if (color === 'success') {
      configToast.buttons = [
        {
          text: 'Aceptar',
          role: 'cancel'
        }
      ];
    }

    const toast = await this.toastController.create(configToast);
    await toast.present();
    return toast;
  }

  private limpiarFormulario() {
    this.formData = {
      usuario: '',
      contrasena: '',
      matricula: '',
      conocimientosProgramacion: ''
    };
  }
}