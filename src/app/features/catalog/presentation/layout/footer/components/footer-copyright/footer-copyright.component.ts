import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-copyright',
  imports: [],
  templateUrl: './footer-copyright.component.html',
  styles: ``,
})
export class FooterCopyright {
  
  currentYear = new Date().getFullYear();
}
