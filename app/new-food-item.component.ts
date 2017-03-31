import { Component, Output, EventEmitter } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'new-food-item',
  template: `
    <h2>Log new item</h2>
    <div>
      <label>Name:</label>
      <input #newName placeholder="Name">
    </div>
    <div>
      <label>Details:</label>
      <input #newDetails placeholder="Details">
    </div>
    <div>
      <label>Calories</label>
      <input #newCalories type="number" min="0"> Cal
    </div>
    <button (click)="submitForm(newName.value, newDetails.value, newCalories.value)">Log</button>
  `
})

export class NewFoodItemComponent {
  @Output() newItemSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    let newFoodItem: FoodItem = new FoodItem(name, details, calories);
    this.newItemSender.emit(newFoodItem);
  }
}
