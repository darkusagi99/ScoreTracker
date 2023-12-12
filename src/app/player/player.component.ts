import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { Player } from '../player';
import {PLAYERS} from '../mock-player';
import { UpdateScoreDialogComponent } from '../update-score-dialog/update-score-dialog.component';

import {
	MatDialog,
	MAT_DIALOG_DATA,
	MatDialogRef,
	MatDialogTitle,
	MatDialogContent,
	MatDialogActions,
	MatDialogClose,
  } from '@angular/material/dialog';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  imports:[CommonModule, MatCardModule, MatIconModule, MatButtonModule, NgFor],
  standalone : true
})
export class PlayerComponent {
	@Input() configurationMode = false;
	
	// Player list
	players = PLAYERS;
	nextId : number = 1;

	// Constructor
	constructor(public dialog: MatDialog) {
		this.configurationMode = false;
	}
	
	// Decrease player score
	decreaseScore(player : Player) : void {
		player.score--;
	}
	
	// Increate player score
	increaseScore(player : Player) : void {
		player.score++;
	}

	// Update player score (number picker) - TODO
	updateScore(player : Player) : void {

		// Open Dialog
		const dialogRef = this.dialog.open(UpdateScoreDialogComponent, {
			width: '90%',
			data: player.score
		});

		// Manage return value
		dialogRef.afterClosed().subscribe(result => {
			if (result != undefined && result.trim().length > 0) {
				// Update player score
				player.score = result;
			}
		});

	}
	
	// Remove a player from the list
	removePlayer(player : Player) : void {
		// Find index of player
		const indexOfPlayer = this.players.findIndex((object) => {
		  return object.id === player.id;
		});
	
		// Deletion itself
		if (indexOfPlayer !== -1) {
			this.players.splice(indexOfPlayer, 1);
		}
	
	}
	
	// Delete all players from the list
	removeAllPlayers() : void {
		this.players.splice(0);
	}
	
	// Add a player in the list
	addPlayer(playerName : string) : void {
		this.players.push({ id: this.nextId, name: playerName, score: 1 });
		this.nextId++;
	}

	// Pick a player from the list (random)
	pickPlayer() : string {
		// Pick random player ID
		var playersLength = this.players.length;
		if (playersLength == 0) { return ""; }
		var pickedPlayer = Math.floor(Math.random() * playersLength);

		// Extract player name
		return this.players[pickedPlayer].name;
	}
	
}
