import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSideButton } from './show-side-button';

describe('ShowSideButton', () => {
  let component: ShowSideButton;
  let fixture: ComponentFixture<ShowSideButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSideButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSideButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
