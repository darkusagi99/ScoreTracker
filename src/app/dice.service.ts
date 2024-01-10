import { Injectable } from '@angular/core';
import { Dice } from './dice';
import { DiceBox } from './diceBox';

@Injectable({
  providedIn: 'root'
})
export class DiceService {
  // Dice List
  diceList : DiceBox[] = [];
  private storageKey : string = "DICE_LIST";

  constructor() { 
    this.loadData();
  }

  private saveData() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.diceList));
  }

  private loadData() {
    var tmpStorage = localStorage.getItem(this.storageKey);
    if (tmpStorage != null) {
      this.diceList = JSON.parse(tmpStorage);
    }
  }

  // getDiceList
  getDiceList() : DiceBox[] {
    return this.diceList;
  }

  // GetDiceLabel
  getDiceLabel(dice : Dice) : string {
    if (dice.min == 1) {
      return "d" + dice.max;
    } else {
      return "d" + dice.min + "-" + dice.max;
    }
  }

  // Add a new List
  addDiceBox() : void {
    this.diceList.push({id : crypto.randomUUID(), diceList: []});
    this.saveData();
  }

  // Add a dice in a list
  addDice(diceBox : DiceBox, minValue : number, maxValue : number) : void {
    // Search diceBox
    const indexOfBox = this.getBoxIndex(diceBox);

    // Add Dice in the list itself
    if (indexOfBox !== -1) {
      this.diceList.at(indexOfBox)?.diceList.push({id : crypto.randomUUID(), min : minValue, max : maxValue});
    }

    this.saveData();
  }

  // Remove a list
  removeDiceBox(diceBox : DiceBox) : void {
    // Search diceBox
    const indexOfBox = this.getBoxIndex(diceBox);

    // Deletion itself
    if (indexOfBox !== -1) {
      this.diceList.splice(indexOfBox, 1);
    }

    this.saveData();
  }

  // Remove a dice in a list
  removeDice(diceBox : DiceBox, dice : Dice) : void {
    // Search diceBox
    const indexOfBox = this.getBoxIndex(diceBox);

    // Remove Dice in the list itself
    if (indexOfBox !== -1) {
      const indexOfDice =  this.diceList.at(indexOfBox)?.diceList.findIndex((object) => {
        return object.id === dice.id;
      });

      if (indexOfDice!==undefined && indexOfDice !== -1) {
        this.diceList.at(indexOfBox)?.diceList.splice(indexOfDice, 1);
      }
    }

    this.saveData();
  }

  // Roll the dices from a list
  rollDiceList(diceBox : DiceBox) : string {

    // Search diceBox
    const indexOfBox = this.getBoxIndex(diceBox);

    // Return result
    return this.getDiceListResult(indexOfBox);

  }

  rollLoneDiceList() : string {

    // Search diceBox
    const indexOfBox = 0;

    // Return result
    return this.getDiceListResult(indexOfBox);

  }

  private getDiceListResult(indexOfBox: number) : string {

        // Roll results
        var rollResults : string = "Tirage : ";
        var rollTotal : number = 0;
        var rollList : string = "";
    
        var tmpScale : number = 0;
        var currentResult : number = 0;
    
        // Get the box and loop on it
        const tmpList = this.diceList.at(indexOfBox)?.diceList;
        if(tmpList) {
          for(var currentDice of tmpList) {
            // For each dice, get a random value and add to results
            tmpScale = currentDice.max - currentDice.min + 1;
            currentResult = Math.floor(Math.random() * tmpScale);
            currentResult += currentDice.min;
    
            rollTotal += currentResult;
            rollList = rollList + "  " + currentResult.toString() + "  ";
    
          }
        }
    
        // Return result
        return rollResults + rollTotal.toString() + " (" + rollList.trim() + ")";
  }

  // Private utility method - Find DiceBox
  private getBoxIndex(diceBox : DiceBox) : any {
    // Find index of diceBox
    return this.diceList.findIndex((object) => {
      return object.id === diceBox.id;
    });
  }

}
