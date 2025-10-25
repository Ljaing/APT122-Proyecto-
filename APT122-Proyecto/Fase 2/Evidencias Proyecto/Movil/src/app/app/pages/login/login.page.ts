import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonList, IonItem, IonLabel, IonInput, IonButton
  ]
})
export class LoginPage {
  nombre = '';
  password = '';
  loading = signal(false);

  constructor(private toast: ToastController, private router: Router) {}

  async ingresar() {
    this.loading.set(true);
    const ok = this.nombre.trim().length > 0 && this.password.trim().length > 0;
    this.loading.set(false);

    if (!ok) {
      (await this.toast.create({
        message: 'Completa nombre y contraseña',
        duration: 1500
      })).present();
      return;
    }
      localStorage.setItem('aml_nombre', this.nombre.trim());


      this.router.navigateByUrl('/home', { replaceUrl: true });

  }

  recuperar() { /* TODO: flujo recuperación */ }
}
