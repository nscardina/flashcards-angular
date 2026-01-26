import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOrderButton } from './review-order-button';

describe('ReviewOrderButton', () => {
  let component: ReviewOrderButton;
  let fixture: ComponentFixture<ReviewOrderButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewOrderButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewOrderButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
