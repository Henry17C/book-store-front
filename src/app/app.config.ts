import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { BookRepository } from './features/catalog/application/ports/book.repository';
import { BookHttpService } from './features/catalog/infrastructure/adapters/book-http.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // Enlazar el puerto (abstracción) con el adaptador (implementación)
    { provide: BookRepository, useClass: BookHttpService }
  ]
};
