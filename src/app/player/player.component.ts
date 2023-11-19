import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { Player } from '../player';
import {PLAYERS} from '../mock-player';

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
	
	// Decrease player score
	decreaseScore(player : Player) : void {
		player.score--;
	}
	
	// Increate player score
	increaseScore(player : Player) : void {
		player.score++;
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
	removeAllPlayers(player : Player) : void {
		this.players.splice(0);
	}
	
	// Add a player in the list
	addPlayer(player : Player) : void {
	
	}
	
}
