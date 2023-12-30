import { Component, Input } from '@angular/core';

import { Dice } from '../dice';
import { DiceService } from '../dice.service';
import { DiceBox } from '../diceBox';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input() configurationMode = false;

  diceLists : DiceBox[];

  // Constructor
  constructor(public diceService : DiceService) {
    this.diceLists = diceService.getDiceList();
  }

}
