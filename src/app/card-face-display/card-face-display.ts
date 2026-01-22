import { Component, computed, HostBinding, inject, input } from '@angular/core';
import { Side } from '../deck/side';
import { AppUIState } from '../app-uistate';
import { CardBox } from '../card-box/card-box';

@Component({
  selector: 'fc-card-face-display',
  imports: [
    CardBox
  ],
  templateUrl: './card-face-display.html',
  styleUrl: './card-face-display.scss',
  host: {
    "[class]": "cssClasses()"
  }
})
export class CardFaceDisplay {

  #appState = inject(AppUIState)

  side = input(Side.FRONT)

  isRotated = computed(() => (this.side() !== this.#appState.sideVisible()))

  layout = computed(() => (this.#appState.getCurrentVisibleCard()?.[this.side()].layout ?? ""))

  cssClasses = computed(() => (
    [
      this.isRotated() && "rotated",
      this.layout()
    ]
    .filter(Boolean)
    .join(' ')
  ))

}
