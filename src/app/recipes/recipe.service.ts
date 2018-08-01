import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [new Recipe('Fetching data...', '', '', [])];

    getRecipes () {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes);
    }

    getRecipe (id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList (ingredients: Ingredient[]) {
        this.shoppingSrv.addMultiple(ingredients);
    }

    constructor(private shoppingSrv: ShoppingListService) { }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes);
    }

    updateRecipe(id: number, recipe: Recipe) {
        this.recipes[id] = recipe;
        this.recipesChanged.next(this.recipes);
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1);
        this.recipesChanged.next(this.recipes);
    }
}
