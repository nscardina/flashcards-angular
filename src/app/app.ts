import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import { MatMenuModule } from "@angular/material/menu"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { FileUpload } from "./open-deck-button/open-deck-button";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatMenuModule, MatButtonModule, MatIconModule, FileUpload, FileUpload],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  

  protected readonly title = signal('flashcards-angular');
}
