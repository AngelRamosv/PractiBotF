import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButtons, IonMenuButton, IonList, IonItem,
  IonIcon, IonLabel, NavController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { code, repeat, list, grid, gitMerge, text, albumsOutline, caretForwardCircleOutline, codeSlashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-seleccion-simple',
  templateUrl: './seleccion-simple.page.html',
  styleUrls: ['./seleccion-simple.page.scss'],
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
export class SeleccionSimplePage implements OnInit {
  temas = [
    { nombre: 'Diapositivas', icono: 'albums-outline' },
    { nombre: 'Videos (no disponible)', icono: 'caret-forward-circle-outline' },
    { nombre: 'Ejercicios', icono: 'code-slash-outline' }
  ];

  constructor(private navCtrl: NavController) {
    addIcons({ albumsOutline, caretForwardCircleOutline, codeSlashOutline, code, repeat, list, grid, gitMerge, text });
  }

  ngOnInit() {
  }

  navegarATema(tema: string) {
    // Lógica de navegación para cada tema
    console.log('Navegando a:', tema);
    // Ejemplo: this.navCtrl.navigateForward(`/tema/${tema.toLowerCase()}`);
  }

  //Navega a la página Ejercicios
  irEjerciciosSimple() {
    this.navCtrl.navigateForward('/ejercicios-simple');
  }

}