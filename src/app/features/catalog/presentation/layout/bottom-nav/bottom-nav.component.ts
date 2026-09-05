import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogSearchModal } from '../../components/catalog-search-modal/catalog-search-modal.component';
@Component({
  selector: 'app-bottom-nav',
  imports: [RouterLink, CatalogSearchModal],
  templateUrl: './bottom-nav.component.html',
  styles: ``,
})
export class BottomNav {
  isSearchOpen: boolean=false
}
