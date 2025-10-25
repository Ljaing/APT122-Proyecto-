import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonButton,
    IonIcon,
    RouterLink,
  ],
})
export class HomePage {
  nombre = localStorage.getItem('aml_nombre') || 'Usuario';
  emergencias = 2;       // demo
  recordatorios = 1;     // demo

  logout() {
    // placeholder simple; luego lo reemplazamos por AuthService
    localStorage.removeItem('aml_token');
    localStorage.removeItem('aml_nombre');
    location.href = '/login';
  }
  
}
