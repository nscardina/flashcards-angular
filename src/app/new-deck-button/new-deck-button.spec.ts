import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeckButton } from './new-deck-button';

describe('NewDeckButton', () => {
  let component: NewDeckButton;
  let fixture: ComponentFixture<NewDeckButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewDeckButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDeckButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
