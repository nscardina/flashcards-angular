import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertingImageFormatDialog } from './converting-image-format-dialog';

describe('ConvertingImageFormatDialog', () => {
  let component: ConvertingImageFormatDialog;
  let fixture: ComponentFixture<ConvertingImageFormatDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertingImageFormatDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertingImageFormatDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
