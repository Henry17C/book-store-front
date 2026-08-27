import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // <-- Importamos esta utilidad
import { BookCard } from '../book-card/book-card.component';

@Component({
  selector: 'app-book-carousel',
  standalone: true,
  imports: [BookCard],
  templateUrl: './book-carousel.component.html'
})
export class BookCarouselComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) title!: string;
  mockItems = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16];

  @ViewChild('carousel') carouselRef!: ElementRef<HTMLDivElement>;
  private autoPlayTimer: any;
  
  // 1. Inyectamos el ID de la plataforma actual
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    // 2. Verificamos: ¿Estamos en el navegador del cliente?
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay(); // Solo arrancamos el motor aquí
    }
  }

  ngOnDestroy(): void {
    // Es seguro llamar a esto, si no hay timer, no hace nada
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    // Prevenimos que se creen múltiples intervalos por error
    if (this.autoPlayTimer) return; 
    
    this.autoPlayTimer = setInterval(() => {
      this.scrollToNext();
    }, 3000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null; // Limpiamos la referencia
    }
  }

  private scrollToNext(): void {
    // Doble validación de seguridad por si acaso
    if (!isPlatformBrowser(this.platformId) || !this.carouselRef) return;

    const container = this.carouselRef.nativeElement;
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    }
  }
}