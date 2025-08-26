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
  selector: 'app-funciones',
  templateUrl: './funciones.page.html',
  styleUrls: ['./funciones.page.scss'],
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
export class FuncionesPage implements OnInit {
  temas = [
    { nombre: 'Sintaxis', icono: 'git-branch' } // Representa nombres únicos
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

  irSintaxis() {
    this.navCtrl.navigateForward('/sintaxis');
  }
}