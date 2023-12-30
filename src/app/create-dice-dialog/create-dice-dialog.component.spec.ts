import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiceDialogComponent } from './create-dice-dialog.component';

describe('CreateDiceDialogComponent', () => {
  let component: CreateDiceDialogComponent;
  let fixture: ComponentFixture<CreateDiceDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDiceDialogComponent]
    });
    fixture = TestBed.createComponent(CreateDiceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
