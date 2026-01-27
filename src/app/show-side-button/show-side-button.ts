import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ShowSideProviderName, ShowSideProviderNames } from '../ShowSideProvider';
import { ReviewState } from '../review-state';

@Component({
  selector: 'fc-show-side-button',
  imports: [
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './show-side-button.html',
  styleUrl: './show-side-button.scss',
})
export class ShowSideButton {

  ShowSideProviderNames = ShowSideProviderNames

  #reviewState = inject(ReviewState)

  setShowSide(side: ShowSideProviderName) {
      this.#reviewState.showSide.set(side)
    }

}
