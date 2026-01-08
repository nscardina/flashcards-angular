import { Component, inject, signal, WritableSignal } from '@angular/core';
import { Side } from '../deck/side';
import { AppUIState } from '../app-uistate';
import { CardFaceDisplay } from '../card-face-display/card-face-display';

@Component({
  selector: 'fc-card-display',
  imports: [ CardFaceDisplay ],
  templateUrl: './card-display.html',
  styleUrl: './card-display.scss',
})
export class CardDisplay {

  readonly Side = Side

  #appUIState = inject(AppUIState)

  

}
