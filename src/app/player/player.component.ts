import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { Player } from '../player';
import { UpdateScoreDialogComponent } from '../update-score-dialog/update-score-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { PlayerService } from '../player.service';

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
	players : Player[] = [];

	// Constructor
	constructor(public dialog: MatDialog, public playerService : PlayerService) {
		this.configurationMode = false;
		this.players = this.playerService.getPlayers();
	}
	
	// Decrease player score
	decreaseScore(player : Player) : void {
		this.playerService.decreaseScore(player);
	}
	
	// Increate player score
	increaseScore(player : Player) : void {
		this.playerService.increaseScore(player);
	}

	// Update player score (number picker)
	updateScore(player : Player) : void {

		// Open Dialog
		const dialogRef = this.dialog.open(UpdateScoreDialogComponent, {
			width: '90%',
			data: player.score
		});

		// Manage return value
		dialogRef.afterClosed().subscribe(result => {
			if (result != undefined && result.trim().length > 0 && !isNaN(result)) {
				// Update player score
				this.playerService.updateScore(player, result);
			}
		});

	}
	
	// Remove a player from the list
	removePlayer(player : Player) : void {
		this.playerService.removePlayer(player);
	}
	
	// Delete all players from the list
	removeAllPlayers() : void {
		this.playerService.removeAllPlayers();
	}
	
	// Add a player in the list
	addPlayer(playerName : string) : void {
		this.playerService.addPlayer(playerName);
	}

	// Pick a player from the list (random)
	pickPlayer() : string {
		return this.playerService.pickPlayer();
	}
	
}
