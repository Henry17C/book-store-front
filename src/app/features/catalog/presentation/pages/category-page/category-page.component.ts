import { Component, inject, Input } from '@angular/core';
import { Observable, combineLatest, switchMap, map } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { BookCard } from '../../components/book-card/book-card.component';
import { CatalogFacade } from '../../../application/facade/catalog.facade';
import { Paginated } from '../../../domain/models/paginated.model';
import { CatalogBook } from '../../../domain/models/book.model';
import { LoaderComponent } from '../../../../../shared/components/loader/loader/loader.component';
@Component({
  selector: 'app-category-page',
  imports: [CommonModule, AsyncPipe, BookCard, RouterLink, LoaderComponent],
  templateUrl: './category-page.component.html',

})
export class CategoryPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly catalogFacade = inject(CatalogFacade);

  readonly pageSize = 12; // Libros por página en la cuadrícula

  // Títulos legibles para cada identificador de categoría
  private readonly categoryTitles: Record<string, string> = {
    'NEW_RELEASES': 'Novedades',
    'BEST_SELLERS': 'Los Más Vendidos',
    'RECOMMENDED': 'Recomendados para ti'
  };

  // Observable unificado con los datos de la página
  data$: Observable<{
    categoryKey: string;
    categoryTitle: string;
    paginated: Paginated<CatalogBook>;
  }> = combineLatest([
    this.route.paramMap,
    this.route.queryParamMap
  ]).pipe(
    switchMap(([params, queryParams]) => {
      const categoryKey = params.get('category') || 'NEW_RELEASES';
      const page = Number(queryParams.get('page')) || 0;
      const categoryTitle = this.categoryTitles[categoryKey] || 'Catálogo de Libros';

      return this.catalogFacade.getBooksByCategory(categoryKey, page, this.pageSize).pipe(
        map(paginated => ({
          categoryKey,
          categoryTitle,
          paginated
        }))
      );
    })
  );

  // Cambia la página actualizando la URL (QueryParam)
  changePage(categoryKey: string, newPage: number): void {
    this.router.navigate(['/catalogo', categoryKey], {
      queryParams: { page: newPage }
    });
  }
}