import { Injectable, signal, WritableSignal } from '@angular/core';
import { Deck } from './deck/deck';

@Injectable({
  providedIn: 'root',
})
export class DeckState {
  #deck: WritableSignal<Deck | null> = signal(null)

  readonly deck = this.#deck.asReadonly()

  openDeck(fileContents: string): boolean {
    try {
      const json = JSON.parse(fileContents)
      if (Deck.isDeck(json)) {
        this.#deck.set(json)
        return true
      }
    } catch {
      // ignore the error object, the error message means the 
      // JSON isn't valid
    }
    
    // TODO show dialog informing user that this deck isn't valid
    return false
    
  }
}
