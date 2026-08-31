import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-links',
  imports: [],
  templateUrl: './footer-links.component.html',
  styles: ``,
})
export class FooterLinks {
  sections = [
    {
      title: 'Libris',
      items: [
        { label: 'Quienes somos', route: '/quienes-somos' },
        { label: 'Trabaja con nosotros', route: '/trabaja' },
        { label: 'Nuestras librerías', route: '/librerias' }
      ],
      open: false
    },
    {
      title: 'Ayuda',
      items: [
        { label: 'Pago con tarjeta', route: '/pago' },
        { label: 'Devoluciones', route: '/devoluciones' },
        { label: 'Gastos y formas de envío', route: '/envios' }
      ],
      open: false
    },
    {
      title: 'Información legal',
      items: [
        { label: 'Condiciones generales', route: '/condiciones-generales' },
        { label: 'Condiciones de uso', route: '/condiciones-uso' },
        { label: 'Política de privacidad', route: '/privacidad' },
        { label: 'Política de devoluciones', route: '/politica-devoluciones' }
      ],
      open: false
    }
  ];

  toggle(section: any) {
    section.open = !section.open;
  }
}