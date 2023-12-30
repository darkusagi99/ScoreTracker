import { Injectable } from '@angular/core';
import { Dice } from './dice';
import { DICE_LISTS } from './mock-dice';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  // Dice List
  DiceList : Dice[][] = DICE_LISTS; //[];

  constructor() { }

    // getDiceList
    getDiceList() : Dice[][] {
      return this.DiceList;
    }

    // GetDiceLabel
    getDiceLabel(dice : Dice) : string {
      if (dice.min == 1) {
        return "d" + dice.max;
      } else {
        return "d" + dice.min + "-" + dice.max;
      }
    }

    // Add a new List - TODO
    addDiceList() : void {
      this.DiceList.push([]);
    }
  
    // Add a dice in a list - TODO
    addDice() : void {
      //this.DiceList.
    }
  
    // Remove a list - TODO
    removeDiceList() : void {
  
    }
  
    // Remove a dice in a list - TODO
    removeDice() : void {
  
    }
  
    // Roll the dices from a list - TODO
    rollDiceList() : void {
  
    }

}
