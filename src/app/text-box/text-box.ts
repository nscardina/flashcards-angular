import { Component, computed, inject, input } from '@angular/core';
import { BoxNumber } from '../deck/Box';
import { Side } from '../deck/side';
import { AppUIState } from '../app-uistate';
import { DeckState } from '../deck-state';

@Component({
  selector: 'fc-text-box',
  imports: [],
  templateUrl: './text-box.html',
  styleUrl: './text-box.scss',
})
export class TextBox {

  side = input(Side.FRONT)

  boxNumber = input<BoxNumber>("1")

  #appState = inject(AppUIState)
  #deckState = inject(DeckState)

  text = computed(() => this.#appState.getTextCurrentCard(this.boxNumber()))

  updateText(event: Event) {
    this.#appState.setTextCurrentCard(this.boxNumber(), (event.target as HTMLTextAreaElement).value)
  }

}
