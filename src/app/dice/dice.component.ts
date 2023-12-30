import { Component, Input } from '@angular/core';

import { Dice } from '../dice';
import { DICE_LISTS } from '../mock-dice';
import { DiceService } from '../dice.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent {
  @Input() configurationMode = false;

  diceLists : Dice[][];

  // Constructor
  constructor(public diceService : DiceService) {
    this.diceLists = diceService.getDiceList();
  }

}
