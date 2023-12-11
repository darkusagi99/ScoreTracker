import { Component, ViewChild } from '@angular/core';

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
	constructor() {
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
  
}
