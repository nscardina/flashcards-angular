import { afterRenderEffect, Component, computed, ElementRef, inject, input, model, ViewChild } from '@angular/core';
import { BoxNumber } from '../deck/Box';
import { Side } from '../deck/side';
import { AppUIState } from '../app-uistate';
import AppMode from '../AppMode';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CdkMenuModule } from '@angular/cdk/menu';

@Component({
  selector: 'fc-text-box',
  imports: [MatMenuModule, MatIconModule, CdkMenuModule],
  templateUrl: './text-box.html',
  styleUrl: './text-box.scss',
})
export class TextBox {

  @ViewChild("textArea") textArea!: ElementRef<HTMLTextAreaElement>
  shouldSetChildTextBoxActive = model(false)

  #appState = inject(AppUIState)

  side = input(Side.FRONT)
  boxNumber = input<BoxNumber>("1")

  text = computed(() => this.#appState.getTextCurrentCard(this.side(), this.boxNumber()))
  outlined = computed(() => (this.#appState.appMode() === AppMode.EDITING_DECK) ? "outlined" : "")
  readonly = computed(() => this.#appState.appMode() !== AppMode.EDITING_DECK)

  constructor() {

    afterRenderEffect(() => {
      if (this.shouldSetChildTextBoxActive()) {
        this.textArea.nativeElement.focus()
        this.shouldSetChildTextBoxActive.set(false)
      }
    })
  }

  updateText(event: Event) {
    this.#appState.setTextCurrentCard(this.side(), this.boxNumber(), (event.target as HTMLTextAreaElement).value)
  }

  deleteTextBox() {
    this.#appState.deleteAreaCurrentCard(this.side(), this.boxNumber())
  }

}
