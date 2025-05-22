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
  // Mantenemos tus colores (#3d41ab) en el código
  codeLines = [
    'print("Hola Mundo en Python");',
  ];
  typingComplete = false;

  ngOnInit() {
    this.typeCode();
  }

  private async typeCode() {
    const codeElement = document.getElementById('single-line-code');
    if (!codeElement) return;

    // Conservamos todas tus clases CSS existentes
    codeElement.classList.add('permanent-glow');
    codeElement.textContent = '';
    
    // Escribimos línea por línea manteniendo tu estilo
    for (let i = 0; i < this.codeLines.length; i++) {
      // Escribimos cada carácter con delay (conservando tu animación)
      for (const char of this.codeLines[i]) {
        codeElement.textContent += char;
        await this.delay(50 + Math.random() * 30);
      }

      // Agregamos salto de línea solo si no es la última línea
      if (i < this.codeLines.length - 1) {
        codeElement.textContent += '\n';
        await this.delay(100); // Breve pausa entre líneas
      }
    }

    this.typingComplete = true;
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Tus métodos de navegación existentes
  Inicio() {
    this.router.navigate(['/inicio']);
  }

  Formulario() {
    this.router.navigate(['/formulario']);
  }

  constructor(private router: Router) {}
}