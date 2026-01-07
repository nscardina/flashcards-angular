import { TestBed } from '@angular/core/testing';

import { DeckState } from './deck-state';

describe('DeckState', () => {
  let service: DeckState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
