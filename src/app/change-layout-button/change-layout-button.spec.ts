import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLayoutButton } from './change-layout-button';

describe('ChangeLayoutButton', () => {
  let component: ChangeLayoutButton;
  let fixture: ComponentFixture<ChangeLayoutButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeLayoutButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeLayoutButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
