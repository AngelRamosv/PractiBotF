import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tipos-datos-simples',
  templateUrl: './tipos-datos-simples.page.html',
  styleUrls: ['./tipos-datos-simples.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TiposDatosSimplesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
