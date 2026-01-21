import { Component, inject, input, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Side } from '../deck/side';
import { BoxNumber } from '../deck/Box';
import { DeckState } from '../deck-state';
import { AppUIState } from '../app-uistate';

@Component({
  selector: 'fc-set-empty-area-contents-menu',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './set-empty-area-contents-menu.html',
  styleUrl: './set-empty-area-contents-menu.scss',
})
export class SetEmptyAreaContentsMenu {

  side = input(Side.FRONT)

  boxNumber = input<BoxNumber>("1")

  #appUIState = inject(AppUIState)

  shouldSetChildTextBoxActive = model(false)

  newTextBox() {
    this.#appUIState.createTextAreaCurrentCard(this.boxNumber())
    this.shouldSetChildTextBoxActive.set(true)
  }

  newImageBox() {
    this.#appUIState.createImageAreaCurrentCard(this.boxNumber())
  }

  newLaTeXTextBox() {
    this.#appUIState.createLaTeXTextAreaCurrentCard(this.boxNumber())
    this.shouldSetChildTextBoxActive.set(true)
  }

}
