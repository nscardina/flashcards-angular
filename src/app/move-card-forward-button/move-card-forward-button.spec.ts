import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveCardForwardButton } from './move-card-forward-button';

describe('MoveCardForwardButton', () => {
  let component: MoveCardForwardButton;
  let fixture: ComponentFixture<MoveCardForwardButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoveCardForwardButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveCardForwardButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
