import { Injectable, isDevMode, signal, WritableSignal } from '@angular/core';
import { Deck } from './deck/deck';
import CardLayout from './deck/cardlayout';
import { Side } from './deck/side';

@Injectable({
  providedIn: 'root',
})
export class DeckState {
  #deck: WritableSignal<Deck | null> = signal(Deck.makeDefault())

  readonly deck = this.#deck.asReadonly()

  /**
   * Sets the deck state to a newly constructed blank Deck object.
   */
  newBlankDeck() {
    this.#deck.set(Deck.makeDefault())
    if (isDevMode()) {
      console.info("Set deck state to a new blank deck object.")
    }
  }

  /**
   * If the provided string is a valid .deck JSON file, then this method will 
   * initialize the deck state with a new deck object from the JSON, returning 
   * true. Otherwise, it will return false.
   */
  openDeck(fileContents: string): boolean {
    try {
      const json = JSON.parse(fileContents)
      if (Deck.isDeck(json)) {
        this.#deck.set(json)
        console.info("Set deck state to the uploaded deck file.")
        return true // successfully loaded deck
      }
    } catch {
      // ignore the error object, the error message means the 
      // JSON isn't valid
    }
    console.warn("Invalid deck file uploaded.")
    return false // did not load deck
    
  }

  setLayout(cardIndex: number, side: Side, layout: CardLayout): boolean {
    const deck = this.#deck()
    if (deck !== null && cardIndex < deck.cards.length) {
      this.#deck.set({ 
        ...deck,
        cards: [
          ...deck.cards.slice(0, cardIndex),
          {
            front: (side === Side.FRONT) ? {
              ...deck.cards[cardIndex].front,
              layout: layout
            } : deck.cards[cardIndex].front,

            back: (side === Side.BACK) ? {
              ...deck.cards[cardIndex].back,
              layout: layout
            } : deck.cards[cardIndex].back
          },
          ...deck.cards.slice(cardIndex + 1)
        ]
      })
      return true
    } else {
      return false
    }
  }
}
