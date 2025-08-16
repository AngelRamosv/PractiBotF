import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton 
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButton
  ]
})
export class HomePage implements OnInit {
  // Solo una línea de código
  codeLine = 'print("Hola Mundo en Python");';
  typingComplete = false;

  ngOnInit() {
    this.typeCode();
  }

  private async typeCode() {
    const codeElement = document.getElementById('single-line-code');
    if (!codeElement) return;

    codeElement.classList.add('permanent-glow');
    codeElement.textContent = '';
    
    // Escribimos solo la línea única
    for (const char of this.codeLine) {
      codeElement.textContent += char;
      await this.delay(50 + Math.random() * 30);
    }

    this.typingComplete = true;
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  Inicio() {
    this.router.navigate(['/inicio']);
  }

  Formulario() {
    this.router.navigate(['/formulario']);
  }

  constructor(private router: Router) {}
}