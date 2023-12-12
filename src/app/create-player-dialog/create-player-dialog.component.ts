import { Component, Inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-player-dialog',
  templateUrl: './create-player-dialog.component.html',
  styleUrls: ['./create-player-dialog.component.css'],
  imports:[MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  standalone:true
})
export class CreatePlayerDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreatePlayerDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

  // Dismiss dialog if no validation
  onNoClick(): void {
    this.dialogRef.close();
  }

}
