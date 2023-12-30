import { Injectable } from '@angular/core';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

	// Player list
	players : Player[] = [];
  private storageKey : string = "PLAYER_LIST";

  constructor() { 
    this.loadData();
  }

  private saveData() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.players));
  }

  private loadData() {
    var tmpStorage = localStorage.getItem(this.storageKey);
    if (tmpStorage != null) {
      this.players = JSON.parse(tmpStorage);
    }
  }

  public getPlayers() {
    return this.players;
  }

  // Decrease player score
	decreaseScore(player : Player) : void {
		player.score--;
    this.saveData();
	}
	
	// Increate player score
	increaseScore(player : Player) : void {
		player.score++;
    this.saveData();
	}
	
	// update player score
	updateScore(player : Player, newScore : number) : void {
		player.score = newScore;
    this.saveData();
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

    this.saveData();
	
	}
	
	// Delete all players from the list
	removeAllPlayers() : void {
		this.players.splice(0);
    this.saveData();
	}

	// Add a player in the list
	addPlayer(playerName : string) : void {
		this.players.push({ id: crypto.randomUUID(), name: playerName, score: 1 });
    this.saveData();
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
