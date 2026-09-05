// 1. Importa ChangeDetectorRef
import { Component, EventEmitter, Output, inject, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { BookCard } from '../book-card/book-card.component';
import { CatalogBook } from '../../../domain/models/book.model';
import { CatalogFacade } from '../../../application/facade/catalog.facade';

@Component({
  standalone: true,
  selector: 'app-catalog-search-modal',
  imports: [BookCard, ReactiveFormsModule],
  templateUrl: './catalog-search-modal.component.html',
  styles: ``,
})
export class CatalogSearchModal implements OnInit, AfterViewInit {
  @Output() closeModal = new EventEmitter<void>();

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  searchControl = new FormControl('', { nonNullable: true, updateOn: 'change' });
  searchResults: CatalogBook[] = [];
  isLoading = false;

  private readonly catalogFacade = inject(CatalogFacade);
  
  // 2. Inyecta el ChangeDetectorRef
  private readonly cdr = inject(ChangeDetectorRef); 

  @HostListener('document:keydown.escape')
  onEscapePressed() {
    this.closeModal.emit();
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        tap((query) => {
          if (!query || query.length < 3) {
            this.searchResults = [];
            this.isLoading = false;
          } else {
            this.isLoading = true;
          }
          // 3. Obliga a Angular a repintar el HTML mostrando el "Cargando..."
          this.cdr.detectChanges(); 
        }),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((query) => {
          if (!query || query.length < 3) {
            return [];
          }
          return this.catalogFacade.searchBooks(query);
        }),
      )
      .subscribe((results) => {
        this.searchResults = results;
        this.isLoading = false;
        
        // 4. Obliga a Angular a repintar el HTML mostrando los resultados
        this.cdr.detectChanges(); 
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.searchInput.nativeElement.focus();
    }, 50);
  }
}