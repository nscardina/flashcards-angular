import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckInteractionArea } from './deck-interaction-area';

describe('DeckInteractionArea', () => {
  let component: DeckInteractionArea;
  let fixture: ComponentFixture<DeckInteractionArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckInteractionArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckInteractionArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
