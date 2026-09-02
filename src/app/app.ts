import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNav } from './features/catalog/presentation/layout/bottom-nav/bottom-nav.component';
import { Header } from './features/catalog/presentation/layout/header/header.component';
import { Footer } from './features/catalog/presentation/layout/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BottomNav,Header,Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('book-store-front');
}
