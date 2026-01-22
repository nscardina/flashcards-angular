import { Component, computed, inject } from '@angular/core';
import { MatFormField, MatInputModule } from "@angular/material/input"
import { DeckState } from '../deck-state';

@Component({
  selector: 'fc-deck-title-text-field',
  imports: [
    MatInputModule,
    MatFormField
  ],
  templateUrl: './deck-title-text-field.html',
  styleUrl: './deck-title-text-field.scss',
})
export class DeckTitleTextField {

  deckState = inject(DeckState)

  name = computed(() => this.deckState.deck()?.name)

  updateName(name: string) {
    this.deckState.setDeckName(name)
  }

}
