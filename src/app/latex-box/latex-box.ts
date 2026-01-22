import { afterNextRender, afterRenderEffect, Component, computed, ElementRef, inject, input, model, signal, ViewChild } from '@angular/core';
import { BoxNumber } from '../deck/Box';
import { Side } from '../deck/side';
import { AppUIState } from '../app-uistate';
import * as katex from "katex"
import { DomSanitizer } from '@angular/platform-browser';
import AppMode from '../AppMode';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CdkContextMenuTrigger } from "@angular/cdk/menu";

@Component({
  selector: 'fc-latex-box',
  imports: [
    MatMenuModule,
    MatIconModule,
    CdkContextMenuTrigger
],
  templateUrl: './latex-box.html',
  styleUrl: './latex-box.scss'
})
export class LatexBox {

  @ViewChild("latexContainer") latexContainer!: ElementRef<HTMLTextAreaElement>
  shouldRender = signal(true)
  shouldSetChildTextBoxActive = model(false)

  #appState = inject(AppUIState)

  side = input(Side.FRONT)
  boxNumber = input<BoxNumber>("1")

  text = computed(() => this.#appState.getLaTeXTextCurrentCard(this.boxNumber()) ?? "")
  html = computed(() => this.sanitizer.bypassSecurityTrustHtml(katex.renderToString(this.#appState.getLaTeXTextCurrentCard(this.boxNumber()) ?? "", {
    output: "mathml",
    displayMode: true,
    
  })))
  outlined = computed(() => (this.#appState.appMode() === AppMode.EDITING_DECK) ? "outlined" : "")

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

  updateText(event: Event) {
    console.log("update text")
    if (!this.shouldRender()) {
      this.shouldRender.set(true)
      this.#appState.setLaTeXTextCurrentCard(this.boxNumber(), (event.target as HTMLTextAreaElement).value)
    }
  }

  deleteLaTeXBox() {
    console.log("delete")
    this.shouldRender.set(true)
    this.#appState.deleteAreaCurrentCard(this.boxNumber())
  }

}
