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

const TEMA_PAGINA = 'Tipos de Datos Simples'; // 👈 Tema fijo de esta página

@Component({
  selector: 'app-ejerciciost',
  templateUrl: './ejerciciost.page.html',
  styleUrls: ['./ejerciciost.page.scss'],
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
export class EjerciciostPage {
  selectedLevel: 'basico' | 'intermedio' | 'avanzado' | null = null;

  colabUrls = {
    basico: 'https://colab.research.google.com/drive/1jmeFem-Jv8wqcRGqupWmleZphVMFjHhp',
    intermedio: 'https://colab.research.google.com/drive/1c_gDv9iVAhovRSkK-1g7NWZqsrl2awgC',
    avanzado: 'https://colab.research.google.com/drive/17FQjKdIK3AwQ22v-ajy1rv4ioPSFq_D1'
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
        p.nivel === this.selectedLevel && p.tema === temaActual && p.puntuacion > 0
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

        this.guardarProgreso(); // 💾 siempre guarda (update o insert)
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
      const idx = historial.findIndex(p =>
        p.nivel === nuevoProgreso.nivel && p.tema === nuevoProgreso.tema
      );

      if (idx >= 0) {
        historial[idx] = nuevoProgreso; // actualizar
      } else {
        historial.push(nuevoProgreso); // insertar
      }

      localStorage.setItem('progreso', JSON.stringify(historial));
      this.showToast('¡Progreso guardado con éxito!', 'success');
    } catch (error) {
      console.error('Error al guardar progreso:', error);
      this.showToast('Error al guardar progreso', 'danger');
    }
  }

  private getTemaPorNivel(): string {
    return TEMA_PAGINA; // 👈 Tema fijo
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

  private async showToast(message: string, color: 'success' | 'danger' | 'warning') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
      color
    });
    await toast.present();
  }
}
