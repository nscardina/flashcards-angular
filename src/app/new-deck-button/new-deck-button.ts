import { Component, inject } from '@angular/core';
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatMenuModule } from "@angular/material/menu"
import { DeckState } from '../deck-state';

@Component({
  selector: 'fc-new-deck-button',
  imports: [ MatButtonModule, MatIconModule, MatMenuModule ],
  templateUrl: './new-deck-button.html',
  styleUrl: './new-deck-button.scss',
})
export class NewDeckButton {

  #deckState = inject(DeckState)

  newDeck() {
    this.#deckState.newBlankDeck()
  }

}
