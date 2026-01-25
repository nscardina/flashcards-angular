import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import AppMode from '../AppMode';
import CardLayout, { getText } from '../deck/cardlayout';
import { AppUIState } from '../app-uistate';
import { DeckState } from '../deck-state';

@Component({
  selector: 'fc-change-layout-button',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './change-layout-button.html',
  styleUrl: './change-layout-button.scss',
})
export class ChangeLayoutButton {

  #appUIState = inject(AppUIState)

  readonly CardLayout = (Object.values(CardLayout) as CardLayout[])
    .map(layout => ({layout: layout, text: getText(layout)}))

  setLayout(layout: CardLayout) {
    this.#appUIState.setAppMode(AppMode.EDITING_DECK)
    this.#appUIState.setLayoutCurrentCard(this.#appUIState.sideVisible(), layout)
  }

}
