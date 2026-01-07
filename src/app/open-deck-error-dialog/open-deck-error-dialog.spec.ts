import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFormatErrorDialog } from './open-deck-error-dialog';

describe('FileFormatErrorDialog', () => {
  let component: FileFormatErrorDialog;
  let fixture: ComponentFixture<FileFormatErrorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileFormatErrorDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileFormatErrorDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
