import { Routes } from '@angular/router';
import { BookDetails } from './features/catalog/presentation/pages/book-details/book-details.component';
import { CatalogHome } from './features/catalog/presentation/pages/catalog-home/catalog-home';

export const routes: Routes = [
    { path: '', component: CatalogHome },
    { path: 'libro/:slug/:isbn', component: BookDetails }
];
