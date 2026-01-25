import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppUIState } from '../app-uistate';
import AppMode from '../AppMode';

@Component({
  selector: 'fc-move-card-backward-button',
  imports: [
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './move-card-backward-button.html',
  styleUrl: './move-card-backward-button.scss',
})
export class MoveCardBackwardButton {

  appState = inject(AppUIState)

  moveBackward() {
    this.appState.moveCurrentCardBackward()
    this.appState.setAppMode(AppMode.EDITING_DECK)
  }

}
