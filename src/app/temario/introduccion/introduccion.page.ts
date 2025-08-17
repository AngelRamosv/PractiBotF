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
  selector: 'app-introduccion',
  templateUrl: './introduccion.page.html',
  styleUrls: ['./introduccion.page.scss'],
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
export class IntroduccionPage implements OnInit {
  temas = [
    { nombre: 'Identificadores', icono: 'git-branch' }, // Representa nombres únicos
    { nombre: 'Variables', icono: 'cube' }, // Variables como contenedores
    { nombre: 'Tipos de datos simples', icono: 'shapes' }, // Diferentes formas/tipos
    { nombre: 'Operadores', icono: 'calculator' } // Operaciones matemáticas
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

  irIdentificadores() {
    this.navCtrl.navigateForward('/identificadores');
  }
  irVariables() {
    this.navCtrl.navigateForward('/variables');
  }
  irTipos() {
    this.navCtrl.navigateForward('/tipos-datos-simples');
  }
  irOperadores() {
    this.navCtrl.navigateForward('/operadores');
  }
}