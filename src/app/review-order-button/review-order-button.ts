import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ReviewOrder } from '../ReviewOrder';
import { ReviewState } from '../review-state';

@Component({
  selector: 'fc-review-order-button',
  imports: [
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './review-order-button.html',
  styleUrl: './review-order-button.scss',
})
export class ReviewOrderButton {

  ReviewOrder = Object.values(ReviewOrder)

  #reviewState = inject(ReviewState)

  setReviewOrder(order: ReviewOrder) {
    this.#reviewState.reviewOrder.set(order)
  }

}
