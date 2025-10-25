import { Routes } from '@angular/router';

export const routes: Routes = [
  // Inicio: login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Login (ojo con la ruta del import: NO lleva './app/')
  {
    path: 'login',
    loadComponent: () =>
      import('./app/pages/login/login.page').then(m => m.LoginPage),
  },

  // Home que viene por defecto en tu proyecto
  {
    path: 'home',
    loadComponent: () =>  
      import('./home/home.page').then(m => m.HomePage),
  },

  {
    path: 'beneficios',
    loadComponent: () => import('./app/pages/beneficios/beneficios.page').then( m => m.BeneficiosPage)
  },

    // Wildcard
  { path: '**', redirectTo: 'login' },
];
