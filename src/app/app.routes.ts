import { Routes } from '@angular/router';
import { BookDetails } from './features/catalog/presentation/pages/book-details/book-details.component';
import { CatalogHome } from './features/catalog/presentation/pages/catalog-home/catalog-home';
import { CategoryPage } from './features/catalog/presentation/pages/category-page/category-page.component';

export const routes: Routes = [
    { path: '', component: CatalogHome },
    { path: 'libro/:slug/:isbn', component: BookDetails },
    { path: 'catalogo/:category', component: CategoryPage },
];
