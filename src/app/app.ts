import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogHome } from './features/catalog/presentation/pages/catalog-home/catalog-home';
import { BottomNav } from './features/catalog/presentation/layout/bottom-nav/bottom-nav.component';
import { Header } from './features/catalog/presentation/layout/header/header.component';
import { BookDetails } from './features/catalog/presentation/pages/book-details/book-details.component';
import { Footer } from './features/catalog/presentation/layout/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookDetails,RouterOutlet,CatalogHome, BottomNav,Header,Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('book-store-front');
}
