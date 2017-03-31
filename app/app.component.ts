import { Component } from '@angular/core';
import { FoodItem } from './food-item.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>

    <food-list [childFoodItemList]="masterFoodItemList" (editClickSender)="updateItem($event)"></food-list>
    <edit-food-item [childSelectedItem]="selectedItem"></edit-food-item>
    <new-food-item (newItemSender)="addItem($event)"></new-food-item>
  </div>
  `
})

export class AppComponent {
  masterFoodItemList: FoodItem[] = [
    new FoodItem('Hamburger', 'Didn\'t get a soda or cheese on my burger!', 354),
    new FoodItem('Fries', 'I only ate half of them.', 365)
  ];
  selectedItem: FoodItem = null;

  // Actions ****************************
  addItem(newItem: FoodItem) {
    this.masterFoodItemList.push(newItem);
  }

  updateItem(item: FoodItem) {
    this.selectedItem = item;
  }
  // ************************************
}
