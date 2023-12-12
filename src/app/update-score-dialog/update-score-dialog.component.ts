import { Component, Inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {
	MAT_DIALOG_DATA,
	MatDialogRef,
  } from '@angular/material/dialog';

@Component({
  selector: 'app-update-score-dialog',
  templateUrl: './update-score-dialog.component.html',
  styleUrls: ['./update-score-dialog.component.css'],
  imports:[MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  standalone:true
})
export class UpdateScoreDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateScoreDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  // Dismiss dialog if no validation
  onNoClick(): void {
    this.dialogRef.close();
  }
}
