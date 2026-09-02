import { Component } from '@angular/core';
import { HeaderActions } from './components/header-actions/header-actions.component';
import { SearchBar } from './components/search-bar/search-bar.component';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-header',
  imports: [HeaderActions,SearchBar,RouterLink],
  templateUrl: './header.component.html',
  styles: ``,
})
export class Header {}
