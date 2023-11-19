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
	
	players = PLAYERS;
	
	
	decreaseScore(player : Player) : void {
		player.score--;
	}
	
	increaseScore(player : Player) : void {
		player.score++;
	}
	
}
