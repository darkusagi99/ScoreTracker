import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Dice } from '../dice';

@Component({
  selector: 'app-create-dice-dialog',
  templateUrl: './create-dice-dialog.component.html',
  styleUrls: ['./create-dice-dialog.component.css'],
  imports:[MatFormFieldModule, MatInputModule, FormsModule, MatDialogModule, MatButtonModule],
  standalone: true
})
export class CreateDiceDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CreateDiceDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Dice,
  ) {}

}
