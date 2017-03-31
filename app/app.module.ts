import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { FoodListComponent } from './food-list.component';
import { NewFoodItemComponent } from './new-food-item.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, FoodListComponent, NewFoodItemComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
