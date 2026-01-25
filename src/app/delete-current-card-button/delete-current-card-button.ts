import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AppUIState } from '../app-uistate';

@Component({
  selector: 'fc-delete-current-card-button',
  imports: [
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './delete-current-card-button.html',
  styleUrl: './delete-current-card-button.scss',
})
export class DeleteCurrentCardButton {

  appState = inject(AppUIState)

}
