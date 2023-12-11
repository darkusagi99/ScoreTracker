import { Component, ViewChild } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

// Add player component for sub-child
import { PlayerComponent } from './player/player.component';

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
	constructor(public snackBar: MatSnackBar) {
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
		this.snackBar.open(playerName, "Fermer", { duration: 7000, });
	}
  
}
