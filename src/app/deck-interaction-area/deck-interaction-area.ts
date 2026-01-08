import { Component } from '@angular/core';
import { CardDisplay } from '../card-display/card-display';
import { MatButtonModule, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'fc-deck-interaction-area',
  imports: [
    CardDisplay,
    MatMiniFabButton,
    MatIconModule
],
  templateUrl: './deck-interaction-area.html',
  styleUrl: './deck-interaction-area.scss',
})
export class DeckInteractionArea {

}
