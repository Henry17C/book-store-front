import { Component } from '@angular/core';
import { HeaderActions } from './components/header-actions/header-actions.component';
import { SearchBar } from './components/search-bar/search-bar.component';
import { RouterLink } from '@angular/router';
import { CatalogSearchModal } from '../../components/catalog-search-modal/catalog-search-modal.component';

@Component({
  selector: 'app-header',
  imports: [HeaderActions, SearchBar, RouterLink, CatalogSearchModal],
  templateUrl: './header.component.html',
  styles: ``,
})
export class Header {
  isSearchOpen = false;
}
