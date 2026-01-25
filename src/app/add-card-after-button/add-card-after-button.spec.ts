import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardAfterButton } from './add-card-after-button';

describe('AddCardAfterButton', () => {
  let component: AddCardAfterButton;
  let fixture: ComponentFixture<AddCardAfterButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCardAfterButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCardAfterButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
