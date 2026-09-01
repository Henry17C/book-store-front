import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCarouselComponent } from '../../components/book-carousel/book-carousel.component.';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CatalogFacade } from '../../../application/facade/catalog.facade';
import { CatalogBook } from '../../../domain/models/book.model';
@Component({
  selector: 'app-catalog-home',
  standalone: true,
  imports: [CommonModule, BookCarouselComponent, AsyncPipe],
  templateUrl: './catalog-home.html',
})
export class CatalogHome {
  private readonly catalogFacade = inject(CatalogFacade);
  newReleases$: Observable<CatalogBook[]> = this.catalogFacade.getNewReleases();
  bestSellers$: Observable<CatalogBook[]> = this.catalogFacade.getBestSellers();
  recommended$: Observable<CatalogBook[]> = this.catalogFacade.getRecommended();

}
