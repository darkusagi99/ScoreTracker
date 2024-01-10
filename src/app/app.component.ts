import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialog } from '@angular/material/dialog';

// Add player component for sub-child
import { PlayerComponent } from './player/player.component';
import { CreatePlayerDialogComponent } from './create-player-dialog/create-player-dialog.component';
import { DiceComponent } from './dice/dice.component';
import { DiceService } from './dice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('playerList') playerComponent!: PlayerComponent;
	
	title = 'score-tracker';

	
	// Flag for configuration mode
	public configurationMode : boolean;
  
	// Constructor
	constructor(public snackBar: MatSnackBar, public dialog: MatDialog, private diceService : DiceService) {
		this.configurationMode = false;
	}
	
	// Toggle config mode
	toggleConfig() {
		this.configurationMode = !this.configurationMode;
	}

	// Remove all players
	removeAllPlayers() : void {
		this.playerComponent.removeAllPlayers();
	}

	// Pick a player (random)
	pickPlayer() : void {
		var playerName : string = this.playerComponent.pickPlayer();
		if (playerName.length > 0) {
			this.snackBar.open(playerName, "Fermer", { duration: 7000, });
		}
	}

	// Add a player action
	addPlayer() : void {

		// Open Dialog
		const dialogRef = this.dialog.open(CreatePlayerDialogComponent, {
			width: '90%',
			data: ""
		});

		// Manage return value
		dialogRef.afterClosed().subscribe(result => {
			if (result != undefined && result.trim().length > 0) {
				// Add player in the list
				this.playerComponent.addPlayer(result);
			}
		});

	}

	// Roll Dice button action - TODO
	openDice() : void {

		if (this.configurationMode == false && this.diceService.getDiceList().length == 1) {
			// Only one dice roll possible > Show result
			// Get dice result and Display result in snackbar
			this.snackBar.open(this.diceService.rollLoneDiceList(), "Fermer", { duration: 7000, })

		} else {
			// Show Dice modal
			const dialogRef = this.dialog.open(DiceComponent, {
				width : '90%'
			})
			alert("Mode Config");

		}

	}
  
}
