import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { DeckState } from './deck-state';
import { Side } from './deck/side';
import { CardFace } from './deck/CardFace';
import { Card } from './deck/Card';
import AppMode from './AppMode';
import CardLayout from './deck/cardlayout';

@Injectable({
  providedIn: 'root',
})
export class AppUIState {

  #deckState = inject(DeckState)

  #cardVisible: WritableSignal<number> = signal(0)

  #sideVisible: WritableSignal<Side> = signal(Side.FRONT)

  #appMode: WritableSignal<AppMode> = signal(AppMode.MANAGING_FILES)

  cardVisible = this.#cardVisible.asReadonly()

  sideVisible = this.#sideVisible.asReadonly()

  appMode = this.#appMode.asReadonly()


  setVisibleCardIndex(index: number) {
    // if the provided card index is valid for the current deck, 
    // set cardVisible to the new value
    if (index >= 0 && index < (this.#deckState.deck()?.cards.length ?? -1)) {
      this.#cardVisible.set(index)
    }
    this.#cardVisible.set(index)
  }

  viewNextCard() {
    const cards = this.#deckState.deck()?.cards
    if (cards !== undefined) {
      this.#cardVisible.update(index => (index + 1) % cards.length)
    }
  }

  viewPreviousCard() {
    const cards = this.#deckState.deck()?.cards
    if (cards !== undefined) {
      this.#cardVisible.update(index => (((index - 1) % cards.length) + cards.length) % cards.length)
    }
  }

  setSideVisible(side: Side) {
    this.#sideVisible.set(side)
  }

  getCurrentVisibleCard(): Card | null {
    return this.#deckState.deck()?.cards.at(this.#cardVisible()) ?? null
  }

  setAppMode(mode: AppMode) {
    this.#appMode.set(mode)
  }

  setLayoutCurrentCard(layout: CardLayout) {
    this.#deckState.setLayout(this.#cardVisible(), this.#sideVisible(), layout)
  }
  
}
