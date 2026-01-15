import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetEmptyAreaContentsMenu } from './set-empty-area-contents-menu';

describe('SetEmptyAreaContentsMenu', () => {
  let component: SetEmptyAreaContentsMenu;
  let fixture: ComponentFixture<SetEmptyAreaContentsMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetEmptyAreaContentsMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetEmptyAreaContentsMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
