import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateScoreDialogComponent } from './update-score-dialog.component';

describe('UpdateScoreDialogComponent', () => {
  let component: UpdateScoreDialogComponent;
  let fixture: ComponentFixture<UpdateScoreDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateScoreDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateScoreDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
