import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon"
import { DeckState } from '../deck-state';
import { MatMenuModule } from "@angular/material/menu"
import { MatDialog } from '@angular/material/dialog';
import { FileFormatErrorDialog } from '../open-deck-error-dialog/open-deck-error-dialog';

@Component({
  selector: 'fc-open-deck-button',
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './open-deck-button.html',
  styleUrl: './open-deck-button.scss',
})
export class FileUpload {

  #deckState = inject(DeckState)

  constructor(private dialog: MatDialog) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement

    if (!input.files?.length) {
      return
    }

    const deckFile = input.files[0]
    const reader = new FileReader()
    reader.onload = () => {
      // result will be string because the readAsText method is called
      // if the "open deck" procedure isn't successful, open a dialog
      if (!this.#deckState.openDeck(reader.result as string)) {
        this.dialog.open(FileFormatErrorDialog)
      }
      input.value = ""
    }
    reader.readAsText(deckFile)

  }

}
