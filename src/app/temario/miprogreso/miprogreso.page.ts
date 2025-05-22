import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trophyOutline, timeOutline, speedometerOutline, happyOutline, sadOutline, helpCircleOutline } from 'ionicons/icons';

interface Progreso {
  fecha: string;
  nivel: string;
  puntuacion: number;
  tiempo: number;
  tema: string;
}

@Component({
  selector: 'app-miprogreso',
  templateUrl: './miprogreso.page.html',
  styleUrls: ['./miprogreso.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonIcon, CommonModule]
})
export class MiprogresoPage {
  progresos: Progreso[] = [];

  constructor() {
    addIcons({ trophyOutline, timeOutline, speedometerOutline, happyOutline, sadOutline, helpCircleOutline });
  }

  ionViewWillEnter() {
    this.cargarProgreso();
  }

  cargarProgreso() {
    const progresoGuardado = localStorage.getItem('progreso');
    this.progresos = progresoGuardado ? JSON.parse(progresoGuardado) : [];
  }

  getColorPuntuacion(puntuacion: number): string {
    if (puntuacion <= 3) return 'danger';
    if (puntuacion <= 6) return 'warning';
    return 'success';
  }

  getIconoPuntuacion(puntuacion: number): string {
    if (puntuacion <= 3) return 'sad-outline';
    if (puntuacion <= 6) return 'help-circle-outline';
    return 'happy-outline';
  }
}