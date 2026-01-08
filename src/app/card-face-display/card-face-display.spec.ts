import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFaceDisplay } from './card-face-display';

describe('CardFaceDisplay', () => {
  let component: CardFaceDisplay;
  let fixture: ComponentFixture<CardFaceDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardFaceDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFaceDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
