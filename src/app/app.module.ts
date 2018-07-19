import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipiesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipiesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      RecipiesComponent,
      ShoppingListComponent,
      RecipiesDetailsComponent,
      RecipiesListComponent,
      RecipeItemComponent,
      ShoppingEditComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
