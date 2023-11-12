import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  imports:[CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  standalone : true
})
export class PlayerComponent {
	@Input() configurationMode = false;
	name = '';
	score = 1;
}
