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
  selector: 'app-arreglos',
  templateUrl: './arreglos.page.html',
  styleUrls: ['./arreglos.page.scss'],
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
export class ArreglosPage implements OnInit {
  temas = [
    { nombre: 'Introducción', icono: 'git-branch' }, // Representa nombres únicos
    { nombre: 'Tipos', icono: 'cube' }, // Variables como contenedores
    { nombre: 'Arreglos y Funciones', icono: 'shapes' }, // Diferentes formas/tipos
    { nombre: 'String', icono: 'calculator' }, // Operaciones matemáticas
    { nombre: "String Funciones", icono: 'code' },
    { nombre: "Arreglo de registros", icono: 'list' }
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

  irIntroduccion() {
    this.navCtrl.navigateForward('/introduccion_a');
  }
  irTipos() {
    this.navCtrl.navigateForward('/tipos');
  }
  irArreglosF() {
    this.navCtrl.navigateForward('/arreglos-funciones');
  }
  irString() {
    this.navCtrl.navigateForward('/string');
  }
  irStringFunciones() {
    this.navCtrl.navigateForward('/string-funciones');
  }
}