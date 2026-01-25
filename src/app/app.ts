import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from "@angular/material/menu"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { FileUpload } from "./open-deck-button/open-deck-button";
import { MatDialog } from '@angular/material/dialog';
import { NewDeckButton } from "./new-deck-button/new-deck-button";
import { CardDisplay } from './card-display/card-display';
import { DeckInteractionArea } from './deck-interaction-area/deck-interaction-area';
import { ChangeLayoutButton } from './change-layout-button/change-layout-button';
import { AppUIState } from './app-uistate';
import AppMode from './AppMode';
import { DeckTitleTextField } from './deck-title-text-field/deck-title-text-field';
import { Side } from './deck/side';
import { CardIndexPicker } from './card-index-picker/card-index-picker';
import { AddCardAfterButton } from './add-card-after-button/add-card-after-button';
import { DeleteCurrentCardButton } from "./delete-current-card-button/delete-current-card-button";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    FileUpload,
    NewDeckButton,
    DeckInteractionArea,
    ChangeLayoutButton,
    DeckTitleTextField,
    CardIndexPicker,
    AddCardAfterButton,
    DeleteCurrentCardButton
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  appState = inject(AppUIState)

  AppMode = AppMode
  Side = Side

  protected readonly title = signal('flashcards-angular');

  flipVisibleSide() {
    console.log("flip")
    this.appState.setSideVisible((this.appState.sideVisible() === Side.FRONT) ? Side.BACK : Side.FRONT)
  }
}
