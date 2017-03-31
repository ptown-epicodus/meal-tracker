import { Component, Input } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'food-list',
  template: `
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Details</td>
          <td>Calories</td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of childFoodItemList">
          <td>{{item.name}}</td>
          <td>{{item.details}}</td>
          <td>{{item.calories}} C</td>
        </tr>
      </tbody>
    </table>
  `
})

export class FoodListComponent {
  @Input() childFoodItemList: FoodItem[];
}
