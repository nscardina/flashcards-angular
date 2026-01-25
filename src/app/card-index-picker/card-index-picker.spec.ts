import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIndexPicker } from './card-index-picker';

describe('CardIndexPicker', () => {
  let component: CardIndexPicker;
  let fixture: ComponentFixture<CardIndexPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardIndexPicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIndexPicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
