import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCurrentCardButton } from './delete-current-card-button';

describe('DeleteCurrentCardButton', () => {
  let component: DeleteCurrentCardButton;
  let fixture: ComponentFixture<DeleteCurrentCardButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCurrentCardButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCurrentCardButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
