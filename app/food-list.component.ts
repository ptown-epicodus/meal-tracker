import { Component, Input } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'food-list',
  template: `
    <div>
      <label>Filter foods:</label>
      <select (change)="onChange($event.target.value)">
        <option value="all">All</option>
        <option value="high">High-calorie</option>
        <option value="low">Low-calorie</option>
      </select>
    </div>

    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Details</td>
          <td>Calories</td>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of childFoodItemList | caloricContent:filterByEnergy">
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
  filterByEnergy: string = 'all';

  onChange(optionFromMenu: string) {
    this.filterByEnergy = optionFromMenu;
  }
}
