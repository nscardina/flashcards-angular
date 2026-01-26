import { Injectable, signal, WritableSignal } from '@angular/core';
import { ReviewOrder } from './ReviewOrder';
import { ShowSideProviderName } from './ShowSideProvider';

@Injectable({
  providedIn: 'root',
})
export class ReviewState {

  reviewOrder: WritableSignal<ReviewOrder> = signal(ReviewOrder.IN_ORDER)

  showSide: WritableSignal<ShowSideProviderName> = signal("FRONT")

}
