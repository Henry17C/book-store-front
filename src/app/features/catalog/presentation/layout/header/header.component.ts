import { Component } from '@angular/core';
import { HeaderActions } from './components/header-actions/header-actions.component';
import { SearchBar } from './components/search-bar/search-bar.component';
@Component({
  selector: 'app-header',
  imports: [HeaderActions,SearchBar],
  templateUrl: './header.component.html',
  styles: ``,
})
export class Header {}
