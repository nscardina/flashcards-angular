import { TestBed } from '@angular/core/testing';

import { AppUIState } from './app-uistate';

describe('AppUIState', () => {
  let service: AppUIState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppUIState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
