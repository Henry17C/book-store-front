import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // <-- Importamos esta utilidad
import { BookCard } from '../book-card/book-card.component';
import { CatalogBook } from '../../../domain/models/book.model';

@Component({
  selector: 'app-book-carousel',
  standalone: true,
  imports: [BookCard],
  templateUrl: './book-carousel.component.html'
})
export class BookCarouselComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) title!: string;

  @Input({ required: true }) books: CatalogBook[] = []; 


  @ViewChild('carousel') carouselRef!: ElementRef<HTMLDivElement>;
  private autoPlayTimer: any;
  
  // 1. Inyectar el ID de la plataforma actual
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    // 2. Verificar si esta en el navegador del cliente
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay(); // arrancar el motor
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    // Prevenir que se creen múltiples intervalos por error
    if (this.autoPlayTimer) return; 
    
    this.autoPlayTimer = setInterval(() => {
      this.scrollToNext();
    }, 3000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = null; // Limpiar referencia
    }
  }

  private scrollToNext(): void {
    // Doble validación de seguridad
    if (!isPlatformBrowser(this.platformId) || !this.carouselRef) return;

    const container = this.carouselRef.nativeElement;
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    }
  }
}