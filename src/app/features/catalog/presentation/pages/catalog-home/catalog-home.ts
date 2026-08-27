import { Component } from '@angular/core';
import { BookCarouselComponent } from '../../components/book-carousel/book-carousel.component.';
@Component({
  selector: 'app-catalog-home',
  imports: [BookCarouselComponent],
  templateUrl: './catalog-home.html',

})
export class CatalogHome {}
