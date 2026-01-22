import { inject, Injectable, isDevMode, signal, WritableSignal } from '@angular/core';
import { DeckState } from './deck-state';
import { Side } from './deck/side';
import { CardFace } from './deck/CardFace';
import { Card } from './deck/Card';
import AppMode from './AppMode';
import CardLayout from './deck/cardlayout';
import { BoxNumber } from './deck/Box';
import { TextBox } from './deck/TextBox';
import { ImageBox } from './deck/ImageBox';
import { LaTeXTextBox } from './deck/LaTeXTextBox';

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
    return this.#sideVisible.set(side)
  }

  getCurrentVisibleCard(): Card | null {
    return this.#deckState.deck()?.cards.at(this.#cardVisible()) ?? null
  }

  setAppMode(mode: AppMode) {
    return this.#appMode.set(mode)
  }

  setLayoutCurrentCard(layout: CardLayout) {
    return this.#deckState.setLayout(this.#cardVisible(), this.#sideVisible(), layout)
  }

  createTextAreaCurrentCard(box: BoxNumber) {
    return this.#deckState.createTextArea(this.#cardVisible(), this.#sideVisible(), box)
  }

  getTextCurrentCard(box: BoxNumber): string | null {
    const actualBox = this.#deckState.deck()?.cards.at(this.#cardVisible())?.[this.#sideVisible()]?.box[box]
    if (TextBox.isTextBox(actualBox)) {
      return actualBox.text
    }

    return null
  }

  setTextCurrentCard(box: BoxNumber, text: string): boolean {
    const actualBox = this.#deckState.deck()?.cards.at(this.#cardVisible())?.[this.#sideVisible()]?.box[box]
    if (TextBox.isTextBox(actualBox)) {

      this.#deckState.setText(this.#cardVisible(), this.#sideVisible(), box, text)
      return true
    }

    return false
  }

  createImageAreaCurrentCard(box: BoxNumber) {
    return this.#deckState.createImageArea(this.#cardVisible(), this.#sideVisible(), box)
  }

  getImageBase64CurrentCard(box: BoxNumber): string | null {
    const actualBox = this.#deckState.deck()?.cards.at(this.#cardVisible())?.[this.#sideVisible()]?.box[box]
    if (ImageBox.isImageBox(actualBox)) {
      return actualBox.base64ImageData
    }

    return null
  }

  setImageCurrentCard(box: BoxNumber, base64: string | null) {
    const actualBox = this.#deckState.deck()?.cards.at(this.#cardVisible())?.[this.#sideVisible()]?.box[box]
    if (ImageBox.isImageBox(actualBox)) {

      this.#deckState.setImage(this.#cardVisible(), this.#sideVisible(), box, base64)
      return true
    }

    return false
  }

  createLaTeXTextAreaCurrentCard(box: BoxNumber) {
    return this.#deckState.createLaTeXArea(this.#cardVisible(), this.#sideVisible(), box)
  }

  getLaTeXTextCurrentCard(box: BoxNumber): string | null {
    const actualBox = this.#deckState.deck()?.cards.at(this.#cardVisible())?.[this.#sideVisible()]?.box[box]
    if (LaTeXTextBox.isLaTeXTextBox(actualBox)) {
      return actualBox.latex_text
    }

    return null
  }

  setLaTeXTextCurrentCard(box: BoxNumber, text: string) {
    const actualBox = this.#deckState.deck()?.cards.at(this.#cardVisible())?.[this.#sideVisible()]?.box[box]
    if (LaTeXTextBox.isLaTeXTextBox(actualBox)) {

      this.#deckState.setLaTeXText(this.#cardVisible(), this.#sideVisible(), box, text)
      return true
    }

    return false
  }

  deleteAreaCurrentCard(box: BoxNumber) {
    this.#deckState.deleteArea(this.#cardVisible(), this.#sideVisible(), box)
  }
  
}
