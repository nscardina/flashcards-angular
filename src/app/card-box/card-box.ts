import { Component, computed, input } from '@angular/core';
import { Side } from '../deck/side';
import { BoxNumber } from '../deck/Box';

@Component({
  selector: 'fc-card-box',
  imports: [],
  templateUrl: './card-box.html',
  styleUrl: './card-box.scss',
  host: {
    "[class]": "cssClasses()"
  }
})
export class CardBox {

  side = input(Side.FRONT)

  boxNumber = input<BoxNumber>("1")

  cssClasses = computed(() => {
    return "flashcard-box"
  })

}
