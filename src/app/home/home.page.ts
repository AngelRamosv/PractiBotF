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
  private audio!: HTMLAudioElement; // Usamos el operador ! para indicar que se inicializará después

  ngOnInit() {
    this.typeCode();
    this.playSound();
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

  // Reproducir sonido (versión simple)
  private playSound() {
    // Crear elemento de audio
    this.audio = new Audio();
    this.audio.src = 'assets/sound/estrella.mp3'; // Ruta a tu archivo de sonido
    this.audio.volume = 0.9; // Volumen al 30%
    this.audio.load();

    // Intentar reproducir después de una pequeña demora
    setTimeout(() => {
      this.audio.play().catch(error => {
        console.log('La reproducción automática fue prevenida:', error);
        // Si falla, intentar reproducir después de una interacción del usuario
        const handler = () => {
          this.audio.play().catch(e => console.log('Error al reproducir sonido:', e));
          document.removeEventListener('click', handler);
        };
        document.addEventListener('click', handler);
      });
    }, 1000);
  }

  Inicio() {
    this.router.navigate(['/inicio']);
  }

  Formulario() {
    this.router.navigate(['/formulario']);
  }

  constructor(private router: Router) { }
}