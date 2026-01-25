import { Component, computed, ElementRef, inject, ViewChild } from '@angular/core';
import { AppUIState } from '../app-uistate';
import { DeckState } from '../deck-state';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'fc-card-index-picker',
  imports: [
    MatInputModule
  ],
  templateUrl: './card-index-picker.html',
  styleUrl: './card-index-picker.scss',
})
export class CardIndexPicker {

  @ViewChild("indexInput") indexInput!: ElementRef<HTMLInputElement>

  deckState = inject(DeckState)
  appUIState = inject(AppUIState)

  numCardsInDeck = computed(() => this.deckState.deck()?.cards.length ?? 0)
  placeholderText = computed(() => `Card ${this.appUIState.cardVisible() + 1} of ${this.numCardsInDeck()}`)
  
  onInputFocus() {
    this.indexInput.nativeElement.valueAsNumber = this.appUIState.cardVisible() + 1
  }

  onInputChange(event: Event) {
    this.appUIState.setVisibleCardIndex((event.target as HTMLInputElement).valueAsNumber - 1)
    this.indexInput.nativeElement.value = ""
  }

}
