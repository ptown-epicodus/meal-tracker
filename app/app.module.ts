import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { FoodListComponent } from './food-list.component';
import { NewFoodItemComponent } from './new-food-item.component';
import { EditFoodItemComponent } from './edit-food-item.component';
import { CaloricContentPipe } from './caloric-content.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  FoodListComponent,
                  NewFoodItemComponent,
                  EditFoodItemComponent,
                  CaloricContentPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
