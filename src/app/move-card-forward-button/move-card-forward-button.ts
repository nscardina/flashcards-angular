import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppUIState } from '../app-uistate';
import AppMode from '../AppMode';

@Component({
  selector: 'fc-move-card-forward-button',
  imports: [
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './move-card-forward-button.html',
  styleUrl: './move-card-forward-button.scss',
})
export class MoveCardForwardButton {

  appState = inject(AppUIState)

  moveForward() {
    this.appState.moveCurrentCardForward()
    this.appState.setAppMode(AppMode.EDITING_DECK)
  }

}
