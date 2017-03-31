import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'food-list',
  template: `
    <div class="panel panel-info">
      <div class="panel-heading">
        <h1 class="panel-title">Diet</h1>
      </div>
      <div class="panel-body">
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <td>Name</td>
              <td>Details</td>
              <td>Calories</td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of childFoodItemList | caloricContent:filterByEnergy" class={{isSelectedStyle(item)}}>
              <td>{{item.name}}</td>
              <td>{{item.details}}</td>
              <td>{{item.calories}} Cal</td>
              <td><button (click)="editButtonClicked(item)" class="btn btn-sm btn-warning">Edit</button></td>
            </tr>
          </tbody>
        </table>

        <div id="filter-controls">
        <label>Filter foods:</label>
        <select (change)="onChange($event.target.value)">
        <option value="all">All</option>
        <option value="high">High-calorie</option>
        <option value="low">Low-calorie</option>
        </select>
        </div>
      </div>
    </div>
  `
})

export class FoodListComponent {
  @Input() childFoodItemList: FoodItem[];
  @Input() childSelectedItem: FoodItem;
  @Output() editClickSender = new EventEmitter();
  filterByEnergy: string = 'all';

  onChange(optionFromMenu: string) {
    this.filterByEnergy = optionFromMenu;
  }

  editButtonClicked(item: FoodItem) {
    this.editClickSender.emit(item);
  }

  isSelectedStyle(item: FoodItem) {
    if (item == this.childSelectedItem)
      return 'selected-row';
    else
      return '';
  }
}
