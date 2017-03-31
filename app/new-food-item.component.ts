import { Component, Output, EventEmitter } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'new-food-item',
  template: `
  <div class="panel panel-success">
    <div class="panel-heading">
      <h1 class="panel-title">Log new item</h1>
    </div>
    <div class="panel-body">
      <div class="form-group">
        <label>Name:</label>
        <input #newName placeholder="Name" class="form-control">
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input #newDetails placeholder="Details" class="form-control">
      </div>
      <div class="form-group">
        <label>Calories</label>
        <input #newCalories type="number" min="0" placeholder="0 Cal" class="form-control">
      </div>
      <div class="form-group">
        <button (click)="submitForm(newName.value, newDetails.value, newCalories.value)" class="btn btn-success">Log</button>
      </div>
    </div>
  </div>
  `
})

export class NewFoodItemComponent {
  @Output() newItemSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    let newFoodItem: FoodItem = new FoodItem(name, details, calories);
    this.newItemSender.emit(newFoodItem);
  }
}
