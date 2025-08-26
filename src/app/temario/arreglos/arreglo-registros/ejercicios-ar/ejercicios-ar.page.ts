import { Component } from '@angular/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonSelect, IonSelectOption, IonButton,
  ToastController, IonCardTitle, IonCardContent, IonCardHeader,
  IonList, IonLabel, IonCard, IonCardSubtitle, IonCheckbox,
  IonIcon, IonProgressBar
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { happyOutline, sadOutline, helpCircleOutline, refresh, alertCircleOutline } from 'ionicons/icons';

interface Progreso {
  fecha: string;
  nivel: string;
  puntuacion: number;
  tiempo: number;
  tema: string;
}

const TEMA_PAGINA = 'Arreglo de registros'; // 👈 Tema fijo de esta página

@Component({
  selector: 'app-ejercicios-ar',
  templateUrl: './ejercicios-ar.page.html',
  styleUrls: ['./ejercicios-ar.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule,
    IonItem, IonSelect, IonSelectOption, IonButton, IonCardTitle,
    IonCardContent, IonCardHeader, IonList, IonLabel, IonCard, IonCardSubtitle,
    IonCheckbox, IonIcon, IonProgressBar
  ],
  providers: [AlertController]
})
export class EjerciciosARPage {
  selectedLevel: 'basico' | 'intermedio' | 'avanzado' | null = null;

  colabUrls = {
    basico: 'https://colab.research.google.com/drive/1g8lr-yqZ9x3Kn4nlighpWlnBsB4x9NeD?usp=drive_link',
    intermedio: 'https://colab.research.google.com/drive/1zSBhK9_go3mS6WaLLUs5dUgo1IACoKWH?usp=drive_link',
    avanzado: 'https://colab.research.google.com/drive/1crOK2Os4mW3vr_R3J3gyOZF5GyDHeLj4?usp=drive_link'
  };

  colabWindow: Window | null = null;
  startTime = 0;
  checkInterval: any;
  score = 0;
  elapsedMinutes = 0;
  esEjercicioNuevo = true;

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    addIcons({
      happyOutline,
      sadOutline,
      helpCircleOutline,
      refresh,
      alertCircleOutline
    });
  }

  async startExercise() {
    if (!this.selectedLevel) {
      this.showToast('Selecciona un nivel', 'warning');
      return;
    }

    // 🔎 Ahora verifica por NIVEL + TEMA
    this.esEjercicioNuevo = !(await this.verificarEjercicioResuelto());

    if (!this.esEjercicioNuevo) {
      const confirm = await this.mostrarConfirmacion();
      if (!confirm) return;
    }

    this.iniciarEjercicio();
  }

  private async verificarEjercicioResuelto(): Promise<boolean> {
    try {
      const historial: Progreso[] = JSON.parse(localStorage.getItem('progreso') || '[]');
      const temaActual = this.getTemaPorNivel();
      return historial.some(p =>
        p.nivel === this.selectedLevel && p.tema === temaActual && p.puntuacion > 0 // asegura que esté resuelto de verdad
      );
    } catch (error) {
      console.error('Error al verificar progreso:', error);
      return false;
    }
  }

  private async mostrarConfirmacion(): Promise<boolean> {
    const alert = await this.alertCtrl.create({
      header: 'Ejercicio ya resuelto',
      message: `Puedes repasar nuevamente 🙂`,
      buttons: [
        { text: 'Cancelar', role: 'cancel', cssClass: 'alert-cancel-button', handler: () => false },
        { text: 'Resolver igualmente', cssClass: 'alert-confirm-button', handler: () => true }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
    return alert.onDidDismiss().then((data) => data.role !== 'cancel');
  }

  private iniciarEjercicio() {
    this.startTime = Date.now();
    this.colabWindow = window.open(this.colabUrls[this.selectedLevel as keyof typeof this.colabUrls], '_blank');

    const timeUpdater = setInterval(() => {
      this.elapsedMinutes = (Date.now() - this.startTime) / 60000;
    }, 1000);

    this.checkInterval = setInterval(() => {
      if (this.colabWindow && this.colabWindow.closed) {
        clearInterval(timeUpdater);
        clearInterval(this.checkInterval);
        this.calculateScore();

        // 💾 Guardar SIEMPRE (si existe, se actualiza; si no, se crea)
        this.guardarProgreso();
      }
    }, 1000);
  }

  calculateScore() {
    const timeSpentInMinutes = (Date.now() - this.startTime) / 1000 / 60;

    if (timeSpentInMinutes < 1) this.score = 10;
    else if (timeSpentInMinutes < 2) this.score = 9;
    else if (timeSpentInMinutes < 3) this.score = 8;
    else if (timeSpentInMinutes < 4) this.score = 7;
    else if (timeSpentInMinutes < 5) this.score = 6;
    else if (timeSpentInMinutes < 7) this.score = 5;
    else if (timeSpentInMinutes < 10) this.score = 4;
    else if (timeSpentInMinutes < 15) this.score = 3;
    else if (timeSpentInMinutes < 20) this.score = 2;
    else this.score = 1;

    // ❌ Ya no forzamos score = 0 en repaso; sí queremos ver la calificación
  }

  private guardarProgreso() {
    const historial: Progreso[] = JSON.parse(localStorage.getItem('progreso') || '[]');

    const nuevoProgreso: Progreso = {
      fecha: new Date().toLocaleString(),
      nivel: this.selectedLevel || 'desconocido',
      puntuacion: this.score,
      tiempo: parseFloat(this.elapsedMinutes.toFixed(2)),
      tema: this.getTemaPorNivel()
    };

    try {
      // 🔁 UPSERT por (nivel + tema)
      const idx = historial.findIndex(p =>
        p.nivel === nuevoProgreso.nivel && p.tema === nuevoProgreso.tema
      );

      if (idx >= 0) {
        historial[idx] = nuevoProgreso;     // actualiza
      } else {
        historial.push(nuevoProgreso);      // inserta
      }

      localStorage.setItem('progreso', JSON.stringify(historial));
      this.showToast('¡Progreso guardado con éxito!', 'succes');
    } catch (error) {
      console.error('Error al guardar progreso:', error);
      this.showToast('Error al guardar progreso', 'danger');
    }
  }

  // 👇 En esta página el tema es “Variables”
  private getTemaPorNivel(): string {
    return TEMA_PAGINA;
  }

  getScoreColor() {
    if (this.score <= 3) return 'danger';
    if (this.score <= 6) return 'warning';
    return 'success';
  }

  getScoreIcon() {
    if (this.score <= 3) return 'sad-outline';
    if (this.score <= 6) return 'help-circle-outline';
    return 'happy-outline';
  }

  getScoreTitle() {
    if (this.score <= 3) return '¡Sigue practicando!';
    if (this.score <= 6) return '¡Buen intento!';
    return '¡Excelente trabajo!';
  }

  getFeedbackMessage() {
    const messages = [
      'Revisa los conceptos básicos y vuelve a intentarlo. ¡Tú puedes!',
      'Vas por buen camino, pero hay espacio para mejorar. Sigue practicando.',
      '¡Buen trabajo! Has demostrado comprensión del tema.',
      '¡Impresionante! Dominas este concepto completamente.'
    ];
    if (this.score <= 4) return messages[0];
    if (this.score <= 7) return messages[1];
    if (this.score <= 9) return messages[2];
    return messages[3];
  }

  getScoreCardClass() {
    return `score-card ${this.getScoreColor()}-card`;
  }

  resetExercise() {
    this.score = 0;
    this.elapsedMinutes = 0;
    this.selectedLevel = null;
    this.esEjercicioNuevo = true;
  }

  private async showToast(message: string, color: 'succes' | 'danger' | 'warning') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
      color
    });
    await toast.present();
  }
}
