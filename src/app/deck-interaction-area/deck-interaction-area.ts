import { Component, inject } from '@angular/core';
import { CardDisplay } from '../card-display/card-display';
import { MatButtonModule, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppUIState } from '../app-uistate';

@Component({
  selector: 'fc-deck-interaction-area',
  imports: [
    CardDisplay,
    MatButtonModule,
    MatIconModule
],
  templateUrl: './deck-interaction-area.html',
  styleUrl: './deck-interaction-area.scss',
})
export class DeckInteractionArea {

  appState = inject(AppUIState)

}
