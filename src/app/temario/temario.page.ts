import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonMenu,
  IonMenuButton, IonButtons, IonList, IonItem, IonLabel,
  IonIcon, ToastController, MenuController, AlertController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  menu, barChart, informationCircle, logOut,
  code, repeat, list, grid, gitMerge, cube,
  chevronForward, text, documentTextOutline
} from 'ionicons/icons';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.page.html',
  styleUrls: ['./temario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonMenu, IonMenuButton, IonButtons, IonList,
    IonItem, IonLabel, IonIcon
  ]
})
export class TemarioPage {
  temas = [
    { nombre: 'Introducción', icono: 'code' },
    { nombre: 'Estructuras de control', icono: 'repeat' },
    { nombre: 'Arreglos', icono: 'list' },
    { nombre: 'Matrices', icono: 'grid' },
    { nombre: 'Funciones', icono: 'git-merge' }
  ];

  constructor(
    private router: Router,
    private toastController: ToastController,
    private menuCtrl: MenuController,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    addIcons({ barChart, informationCircle, logOut, documentTextOutline, repeat, list, grid, gitMerge, text, code, menu, cube, chevronForward });
  }

  async confirmarCierreSesion() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Estás seguro que deseas cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Operación cancelada');
          }
        },
        {
          text: 'Sí',
          handler: () => {
            this.cerrarSesion();
          }
        }
      ]
    });

    await alert.present();
  }

  private async cerrarSesion() {
    const toast = await this.toastController.create({
      message: 'Sesión cerrada correctamente',
      duration: 2000,
      position: 'bottom',
      color: 'success',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          handler: () => {
            // No necesita lógica adicional, el toast se cerrará automáticamente
          }
        }
      ]
    });

    await toast.present();
    toast.onDidDismiss().then(() => {
      this.router.navigate(['/home']);
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle('main-menu');
  }

  navegarATema(tema: string) {
    console.log('Navegando a:', tema);
    // Implementación de navegación a temas específicos
  }

  irAIntroduccion() {
    this.navCtrl.navigateForward('/introduccion');
  }

  irEstructuras() {
    this.navCtrl.navigateForward('/estructuras-de-control');
  }

  irArreglos() {
    this.navCtrl.navigateForward('/arreglos');
  }

  irMatrices() {
    this.navCtrl.navigateForward('/matrices');
  }

  irFunciones() {
    this.navCtrl.navigateForward('/funciones');
  }

  miprogreso() {
    this.navCtrl.navigateForward('/miprogreso');
  }

  acerca() {
    this.navCtrl.navigateForward('/appionic');
  }
}