import { Component, computed, inject, input } from '@angular/core';
import { Side } from '../deck/side';
import { BoxNumber } from '../deck/Box';
import { DeckState } from '../deck-state';
import { AppUIState } from '../app-uistate';
import { CardContentData } from '../deck/CardContentData';
import { ChangeLayoutButton } from '../change-layout-button/change-layout-button';
import { SetEmptyAreaContentsMenu } from '../set-empty-area-contents-menu/set-empty-area-contents-menu';
import { TextBox } from '../text-box/text-box';
import { ImageBox } from '../image-box/image-box';

@Component({
  selector: 'fc-card-box',
  imports: [
    SetEmptyAreaContentsMenu,
    TextBox,
    ImageBox
  ],
  templateUrl: './card-box.html',
  styleUrl: './card-box.scss',
  host: {
    "[class]": "cssClasses()"
  }
})
export class CardBox {

  CardContentDataType = CardContentData.Type

  side = input(Side.FRONT)

  boxNumber = input<BoxNumber>("1")

  appUIState = inject(AppUIState)

  boxType = computed(() => (
    this.appUIState.getCurrentVisibleCard()?.[this.side()]?.box?.[this.boxNumber()]?.type
  ))

  cssClasses = computed(() => {
    return "flashcard-box"
  })

}
