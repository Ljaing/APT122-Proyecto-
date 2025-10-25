import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular/standalone';

type Beneficio = {
  icono: string;
  color: string;
  nombre: string;
  descuento: string;
  direccion: string;
  condicion: string;
};

@Component({
  selector: 'app-beneficios',
  standalone: true,
  templateUrl: './beneficios.page.html',
  styleUrls: ['./beneficios.page.scss'],
  imports: [CommonModule, IonContent, IonIcon]
})
export class BeneficiosPage {
  beneficios: Beneficio[] = [
    {
      icono: 'medical-outline',
      color: '#58c3dd',
      nombre: 'Farmacia Lonquén',
      descuento: '15% en medicamentos',
      direccion: 'Av. Central 234',
      condicion: 'Mostrar QR en caja.'
    },
    {
      icono: 'cart-outline',
      color: '#43a047',
      nombre: 'Supermercado Líder',
      descuento: '10% en abarrotes',
      direccion: 'Camino Lonquén 1455',
      condicion: 'Lunes a viernes, 9:00–17:00 hrs.'
    },
    {
      icono: 'footsteps-outline',
      color: '#f4a940',
      nombre: 'Bata',
      descuento: '20% en calzado ortopédico',
      direccion: 'Plaza Sur #456',
      condicion: 'Presentar QR y cédula.'
    }
  ];

  mostrarQR(b: Beneficio) {
    alert(`✅ Beneficio: ${b.nombre}\n\nDescuento: ${b.descuento}\nDirección: ${b.direccion}`);
  }
}
