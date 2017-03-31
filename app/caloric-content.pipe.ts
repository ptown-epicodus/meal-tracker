import { Pipe, PipeTransform } from '@angular/core';
import { FoodItem } from './food-item.model';

@Pipe({
  name: 'caloricContent',
  pure: true
})

export class CaloricContentPipe implements PipeTransform {
  transform(input: FoodItem[], filterOption: string) {
    switch(filterOption) {
      case 'all':
        return input;
      case 'high':
        return input.filter(function(item: FoodItem) {
          return item.calories > 500;
        });
      case 'low':
        return input.filter(function(item: FoodItem) {
          return item.calories < 500;
        });
      default:
        return input;
    }
  }
}
