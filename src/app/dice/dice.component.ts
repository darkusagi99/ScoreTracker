import { Component, Input } from '@angular/core';

import { Dice } from '../dice';
import { DiceService } from '../dice.service';
import { DiceBox } from '../diceBox';
import { CreateDiceDialogComponent } from '../create-dice-dialog/create-dice-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input() configurationMode = false;

  diceLists : DiceBox[];

  // Constructor
  constructor(public dialog: MatDialog, public diceService : DiceService) {
    this.diceLists = diceService.getDiceList();
  }

  // Add Dice Box
  addDiceBox() : void {
    this.diceService.addDiceBox();
  }

  // Remove Dice Box
  removeDiceBox(diceBox : DiceBox) : void {
    this.diceService.removeDiceBox(diceBox);
  }

  // Add a dice in a list
  addDice(diceBox : DiceBox, minValue : number, maxValue : number) : void {

    var TmpDice : Dice = {id : "", min : 1, max : 6};

    // Open Dialog
		const dialogRef = this.dialog.open(CreateDiceDialogComponent, {
			width: '90%',
			data: TmpDice
		});

		// Manage return value
		dialogRef.afterClosed().subscribe(result => {
			if (result != undefined && result.trim().length > 0) {
				// add dice in list
				this.diceService.addDice(diceBox, result.min, result.max);
			}
		});

  }

  // Remove a dice in a list
  removeDice(diceBox : DiceBox, dice : Dice) : void {
    this.diceService.removeDice(diceBox, dice);
  }

  // Roll the dices from a list
  rollDiceList(diceBox : DiceBox) : string {
    return this.diceService.rollDiceList(diceBox);
  }

}
