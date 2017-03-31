import { Component, Input } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'edit-food-item',
  template: `
  <div *ngIf="childSelectedItem" class="panel panel-warning">
    <div class="panel-heading">
      <h1 class="panel-title">Edit entry:</h1>
    </div>
    <div class="panel-body">
      <div class="form-group">
        <label>Name:</label>
        <input [(ngModel)]="childSelectedItem.name" name="name" placeholder="Name" class="form-control">
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input [(ngModel)]="childSelectedItem.details" name="details" placeholder="Details" class="form-control">
      </div>
      <div class="form-group">
        <label>Calories</label>
        <input [(ngModel)]="childSelectedItem.calories" name="calories" type="number" min="0" placeholder="0 Cal" class="form-control">
      </div>
    </div>
  </div>
  `
})

export class EditFoodItemComponent {
  @Input() childSelectedItem: FoodItem;
}
