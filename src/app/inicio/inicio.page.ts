import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonItem, IonInput,
  ToastController 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonItem, IonInput
  ]
})
export class InicioPage {
  credenciales = {
    usuario: '',
    contrasena: ''
  };

  constructor(
    private router: Router,
    private toastController: ToastController,
    private database: DatabaseService
  ) {}

  async iniciarSesion() {
    // Validar campos vacíos
    if (!this.credenciales.usuario || !this.credenciales.contrasena) {
      await this.mostrarToast('Debes llenar todos los campos', 'warning');
      return;
    }

    try {
      // Buscar usuario en la base de datos
      const usuario = await this.database.validarCredenciales(
        this.credenciales.usuario, 
        this.credenciales.contrasena
      );

      if (usuario) {
        const toast = await this.mostrarToast('Inicio exitoso', 'success');
        toast.onDidDismiss().then(() => {
          this.router.navigate(['/temario']);
        });
      } else {
        await this.mostrarToast('Datos incorrectos', 'danger');
      }
    } catch (error) {
      await this.mostrarToast('Error al verificar credenciales', 'danger');
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
}