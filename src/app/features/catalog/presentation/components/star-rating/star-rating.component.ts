import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  imports: [DecimalPipe],
  templateUrl: './star-rating.component.html',
})
export class StarRating {
  @Input({ required: true }) rating: number = 0;
}
