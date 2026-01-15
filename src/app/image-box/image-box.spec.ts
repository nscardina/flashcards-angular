import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBox } from './image-box';

describe('ImageBox', () => {
  let component: ImageBox;
  let fixture: ComponentFixture<ImageBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
