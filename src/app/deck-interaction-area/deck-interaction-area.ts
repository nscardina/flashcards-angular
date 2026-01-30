import { Component, effect, inject, signal } from '@angular/core';
import { CardDisplay } from '../card-display/card-display';
import { MatButtonModule, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppUIState } from '../app-uistate';
import AppMode from '../AppMode';
import { ReviewState } from '../review-state';
import { Side } from '../deck/side';

@Component({
  selector: 'fc-deck-interaction-area',
  imports: [
    CardDisplay,
    MatButtonModule,
    MatIconModule
],
  templateUrl: './deck-interaction-area.html',
  styleUrl: './deck-interaction-area.scss',
})
export class DeckInteractionArea {

  appState = inject(AppUIState)
  reviewState = inject(ReviewState)

  AppMode = AppMode

  prevAppMode = signal(this.appState.appMode())
  seenQuestionSide = signal(false)

  constructor() {
    effect(() => {
      console.log("effect ran")

      // If the side that isn't set as visible initially is now visible, then the user 
      // has flipped the card over.
      if (this.appState.sideVisible() !== this.reviewState.sideCurrentlySetAsQuestion()) {
        this.seenQuestionSide.set(true)
      }

      // If the user has just turned the app's mode to REVIEWING_DECK
      if (this.appState.appMode() === AppMode.REVIEWING_DECK && this.appState.appMode() !== this.prevAppMode()) {
        this.prevAppMode.set(this.appState.appMode())
        this.seenQuestionSide.set(false)

        // re-initialize the providers for the order and side to show
        this.reviewState.updateReviewOrder(this.reviewState.reviewOrder())
        this.reviewState.updateSideShown(this.reviewState.showSide())

        console.log("in if")

        // set the first card visible and the correct side visible
        const cardBeingReviewed = this.reviewState.cardBeingReviewed()
        const sideBeingShown = this.reviewState.sideCurrentlySetAsQuestion()
        if (cardBeingReviewed !== null && sideBeingShown !== null) {
          this.appState.setVisibleCardIndex(cardBeingReviewed)
          this.appState.setSideVisible(sideBeingShown)
        } else {
          this.appState.setAppMode(AppMode.MANAGING_FILES)
        }
      }

      this.prevAppMode.set(this.appState.appMode())
    })
  }

  goToNextCard() {
    const reviewOrderProvider = this.reviewState.reviewOrderProvider()
    const showSideProvider = this.reviewState.showSideProvider()

    // fallback behavior for weird state
    if (reviewOrderProvider === null || showSideProvider === null) {
      this.appState.setAppMode(AppMode.MANAGING_FILES)
      this.prevAppMode.set(AppMode.MANAGING_FILES)
      return
    }
    
    const nextCard = reviewOrderProvider.next()
    const nextSide = showSideProvider()

    // if there are no more cards to show, then go back to 
    // MANAGING_FILES
    if (nextCard.done) {
      this.appState.setAppMode(AppMode.MANAGING_FILES)
      this.prevAppMode.set(AppMode.MANAGING_FILES)
      return
    }

    // otherwise, show the next card
    this.appState.setVisibleCardIndex(nextCard.value)
    this.appState.setSideVisible(nextSide)
    this.seenQuestionSide.set(false)
  }

}
