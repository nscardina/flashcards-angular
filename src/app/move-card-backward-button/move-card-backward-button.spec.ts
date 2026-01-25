import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveCardBackwardButton } from './move-card-backward-button';

describe('MoveCardBackwardButton', () => {
  let component: MoveCardBackwardButton;
  let fixture: ComponentFixture<MoveCardBackwardButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveCardBackwardButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveCardBackwardButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
