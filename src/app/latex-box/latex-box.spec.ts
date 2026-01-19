import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatexBox } from './latex-box';

describe('LatexBox', () => {
  let component: LatexBox;
  let fixture: ComponentFixture<LatexBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatexBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatexBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
