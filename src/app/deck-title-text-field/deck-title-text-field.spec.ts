import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckTitleTextField } from './deck-title-text-field';

describe('DeckTitleTextField', () => {
  let component: DeckTitleTextField;
  let fixture: ComponentFixture<DeckTitleTextField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckTitleTextField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckTitleTextField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
