import { Component, Input } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'edit-food-item',
  template: `
  <div *ngIf="childSelectedItem">
    <h2>Edit entry:</h2>
    <div>
      <label>Name:</label>
      <input [(ngModel)]="childSelectedItem.name" name="name" placeholder="Name">
    </div>
    <div>
      <label>Details:</label>
      <input [(ngModel)]="childSelectedItem.details" name="details" placeholder="Details">
    </div>
    <div>
      <label>Calories</label>
      <input [(ngModel)]="childSelectedItem.calories" name="calories" type="number" min="0"> Cal
    </div>
  </div>
  `
})

export class EditFoodItemComponent {
  @Input() childSelectedItem: FoodItem;
}
