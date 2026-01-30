import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { inOrderGenerator, orderGenerator, ReviewOrder, ReviewOrderGenerator } from './ReviewOrder';
import ShowSideProvider, { ShowSideProviderName } from './ShowSideProvider';
import { AppUIState } from './app-uistate';
import { DeckState } from './deck-state';
import { Side } from './deck/side';
import { Card } from './deck/Card';

@Injectable({
  providedIn: 'root',
})
export class ReviewState {

  #deckState = inject(DeckState)

  #reviewOrder: WritableSignal<ReviewOrder> = signal(ReviewOrder.IN_ORDER)
  #reviewOrderProvider: WritableSignal<ReviewOrderGenerator | null> = signal(null)
  #cardBeingReviewed: WritableSignal<number | null> = signal(null)

  #showSide: WritableSignal<ShowSideProviderName> = signal("FRONT")
  #showSideProvider: WritableSignal<(() => Side) | null> = signal(null)
  #sideCurrentlySetAsQuestion: WritableSignal<Side | null> = signal(null)
  

  readonly reviewOrder = this.#reviewOrder.asReadonly()
  readonly reviewOrderProvider = this.#reviewOrderProvider.asReadonly()
  readonly cardBeingReviewed = this.#cardBeingReviewed.asReadonly()

  readonly showSide = this.#showSide.asReadonly()
  readonly showSideProvider = this.#showSideProvider.asReadonly()
  readonly sideCurrentlySetAsQuestion = this.#sideCurrentlySetAsQuestion.asReadonly()
  

  updateReviewOrder(reviewOrder: ReviewOrder) {
    const deck = this.#deckState.deck()
    if (deck !== null) {
      this.#reviewOrder.set(reviewOrder)
      this.#reviewOrderProvider.set(orderGenerator(reviewOrder, deck))
      this.#cardBeingReviewed.set(this.#reviewOrderProvider()!.next()!.value)
    }
  }

  updateSideShown(side: ShowSideProviderName) {
    const deck = this.#deckState.deck()
    if (deck !== null) {
      this.#showSide.set(side)
      this.#showSideProvider.set(ShowSideProvider.get(side))
      this.#sideCurrentlySetAsQuestion.set(this.#showSideProvider()!())
    }
  }
  
  
}
