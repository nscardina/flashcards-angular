import { afterRenderEffect, Component, computed, ElementRef, inject, input, model, signal, ViewChild } from '@angular/core';
import { BoxNumber } from '../deck/Box';
import { Side } from '../deck/side';
import { AppUIState } from '../app-uistate';
import * as katex from "katex"
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'fc-latex-box',
  imports: [],
  templateUrl: './latex-box.html',
  styleUrl: './latex-box.scss',
})
export class LatexBox {

  constructor(private sanitizer: DomSanitizer) {
    afterRenderEffect(() => {
      if (this.shouldSetChildTextBoxActive()) {
        if (this.shouldRender()) {
          this.shouldRender.set(false)
        } else {
          this.latexContainer.nativeElement.focus()
          this.shouldSetChildTextBoxActive.set(false)
        }
      }
    })
  }

  @ViewChild("latexContainer") latexContainer!: ElementRef<HTMLTextAreaElement>

  shouldRender = signal(true)
  
  focusTextArea() {
    this.shouldRender.set(false)
    setTimeout(() => {
      const length = this.latexContainer.nativeElement.value.length
      this.latexContainer.nativeElement.focus()
      this.latexContainer.nativeElement.setSelectionRange(
        length, length
      )
    }, 0)
  }

  shouldSetChildTextBoxActive = model(false)

  side = input(Side.FRONT)

  boxNumber = input<BoxNumber>("1")

  #appState = inject(AppUIState)

  text = computed(() => this.#appState.getLaTeXTextCurrentCard(this.boxNumber()) ?? "")

  html = computed(() => this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(this.#appState.getLaTeXTextCurrentCard(this.boxNumber()) ?? "", {
    output: "mathml",
    displayMode: true,
    
  })))

  updateText(event: Event) {
    this.shouldRender.set(true)
    console.log((event.target as HTMLTextAreaElement).value)
    this.#appState.setLaTeXTextCurrentCard(this.boxNumber(), (event.target as HTMLTextAreaElement).value)
  }

}
