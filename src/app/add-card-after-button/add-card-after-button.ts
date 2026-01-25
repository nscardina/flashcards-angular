import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppUIState } from '../app-uistate';
import AppMode from '../AppMode';

@Component({
  selector: 'fc-add-card-after-button',
  imports: [
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './add-card-after-button.html',
  styleUrl: './add-card-after-button.scss',
})
export class AddCardAfterButton {

  appState = inject(AppUIState)

  addCard() {
    this.appState.addBlankCardAfter()
    this.appState.setAppMode(AppMode.EDITING_DECK)
  }

}
