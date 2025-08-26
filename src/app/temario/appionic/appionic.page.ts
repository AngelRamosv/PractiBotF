import { Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonGrid, IonRow, IonCol, IonChip, IonIcon, IonLabel
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  school, timer, barChart,
  logoGoogle, library, location
} from 'ionicons/icons';

@Component({
  selector: 'app-appionic',
  templateUrl: './appionic.page.html',
  styleUrls: ['./appionic.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonGrid, IonRow, IonCol, IonChip, IonIcon, IonLabel
  ]
})
export class AppionicPage implements OnInit {

  constructor() {
    // Añadir los iconos que vamos a utilizar
    addIcons({
      school, timer, barChart,
      logoGoogle, library, location
    });
  }

  ngOnInit() {
    // Podemos añadir lógica de inicialización si es necesario
  }
}