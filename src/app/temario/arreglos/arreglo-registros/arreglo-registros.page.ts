import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-arreglo-registros',
  templateUrl: './arreglo-registros.page.html',
  styleUrls: ['./arreglo-registros.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ArregloRegistrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
