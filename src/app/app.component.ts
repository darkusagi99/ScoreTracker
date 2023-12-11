import { Component, ViewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

import {
	MatDialog,
	MAT_DIALOG_DATA,
	MatDialogRef,
	MatDialogTitle,
	MatDialogContent,
	MatDialogActions,
	MatDialogClose,
  } from '@angular/material/dialog';

// Add player component for sub-child
import { PlayerComponent } from './player/player.component';
import { CreatePlayerDialogComponent } from './create-player-dialog/create-player-dialog.component';

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
	constructor(public snackBar: MatSnackBar, public dialog: MatDialog) {
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

	// Add a player action - TODO
	addPlayer() : void {

		// Open Dialog
		const dialogRef = this.dialog.open(CreatePlayerDialogComponent, {
			width: '250px',
			data: ""
		});

		// Manage return value
		dialogRef.afterClosed().subscribe(result => {
			if (result != undefined && result.trim().length > 0) {

				// TODO add code for player creation
				console.log('The dialog was closed');
				alert(result);
			}
		});

	}

	// Roll Dice button action - TODO
	rollDice() : void {
		alert("rollDice");

	}
  
}
