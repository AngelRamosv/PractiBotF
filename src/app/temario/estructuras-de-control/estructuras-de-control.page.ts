import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons, IonMenuButton, IonList, IonItem,
  IonIcon, IonLabel, NavController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  code,
  repeat,
  list,
  grid,
  gitMerge,
  text,
  cube,
  calculator,
  shapes,
  gitBranch
} from 'ionicons/icons';

@Component({
  selector: 'app-estructuras-de-control',
  templateUrl: './estructuras-de-control.page.html',
  styleUrls: ['./estructuras-de-control.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    IonIcon,
    IonLabel
  ]
})
export class EstructurasDeControlPage implements OnInit {
  temas = [
    { nombre: 'Selección simple (if-else)', icono: 'git-branch' }, // Representa nombres únicos
    { nombre: 'Selección múltiple', icono: 'cube' }, // Variables como contenedores
    { nombre: 'Iteración (while)', icono: 'shapes' }, // Diferentes formas/tipos
    { nombre: 'Iteración (do-while)', icono: 'calculator' }, // Operaciones matemáticas
    { nombre: "Iteración (for)", icono: 'code' }
  ];

  constructor(private navCtrl: NavController) {
    addIcons({
      code,
      repeat,
      list,
      grid,
      gitMerge,
      text,
      cube,
      calculator,
      shapes,
      gitBranch
    });
  }

  ngOnInit() {
  }

  navegarATema(tema: string) {
    console.log('Navegando a:', tema);
  }

  irCondicionales() {
    this.navCtrl.navigateForward('/seleccion-simple');
  }

  irCiclos() {
    this.navCtrl.navigateForward('/seleccion-multiple');
  }

  irWhile() {
    this.navCtrl.navigateForward('/while');
  }

  irDoWhile() {
    this.navCtrl.navigateForward('/do-while');
  }

  irFor() {
    this.navCtrl.navigateForward('/for');
  }
}