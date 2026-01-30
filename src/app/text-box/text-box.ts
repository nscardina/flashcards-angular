import { afterRenderEffect, Component, computed, effect, ElementRef, inject, input, model, ViewChild } from '@angular/core';
import { BoxNumber } from '../deck/Box';
import { Side } from '../deck/side';
import { AppUIState } from '../app-uistate';
import AppMode from '../AppMode';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CdkMenuModule } from '@angular/cdk/menu';
import { DeckState } from '../deck-state';
import { TextBox as DeckTextBox } from '../deck/TextBox';

@Component({
  selector: 'fc-text-box',
  imports: [MatMenuModule, MatIconModule, CdkMenuModule],
  templateUrl: './text-box.html',
  styleUrl: './text-box.scss',
})
export class TextBox {

  @ViewChild("textArea") textArea!: ElementRef<HTMLTextAreaElement>
  shouldSetChildTextBoxActive = model(false)

  #appState = inject(AppUIState)
  #deckState = inject(DeckState)

  side = input.required<Side>()
  boxNumber = input.required<BoxNumber>()

  text = computed(() => {
    console.log(`cardVisible ${this.#appState.cardVisible()} box ${this.boxNumber()}`)
    const box = this.#deckState.deck()?.cards[this.#appState.cardVisible()]?.[this.#appState.sideVisible()]?.box[this.boxNumber()]
    if (DeckTextBox.isTextBox(box)) {
      return box.text
    } else {
      return null
    }
  })
  outlined = computed(() => (this.#appState.appMode() === AppMode.EDITING_DECK) ? "outlined" : "")
  readonly = computed(() => this.#appState.appMode() !== AppMode.EDITING_DECK)

  constructor() {

    afterRenderEffect(() => {
      this.textArea.nativeElement.value = this.text() ?? ""

      if (this.shouldSetChildTextBoxActive()) {
        this.textArea.nativeElement.focus()
        this.shouldSetChildTextBoxActive.set(false)
      }
    })
  }

  updateText(event: Event) {
    this.#appState.setTextCurrentCard(this.side(), this.boxNumber(), (event.target as HTMLTextAreaElement).value)
  }

  deleteTextBox() {
    this.#appState.deleteAreaCurrentCard(this.side(), this.boxNumber())
  }

}
