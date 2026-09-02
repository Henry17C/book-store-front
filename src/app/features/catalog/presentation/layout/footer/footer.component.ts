import { Component } from '@angular/core';
import { FooterSocial } from './components/footer-social/footer-social.component';
import { FooterLinks } from './components/footer-links/footer-links.component';
import { FooterCopyright } from './components/footer-copyright/footer-copyright.component';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-footer',
  imports: [FooterSocial, FooterLinks, FooterCopyright, RouterLink],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class Footer {}
