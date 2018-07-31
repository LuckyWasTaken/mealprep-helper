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

    private recipes: Recipe[] = [
        new Recipe('Chicken tikka masala', 'Just a test recipe',
         'http://assets.kraftfoods.com/recipe_images/opendeploy/173356_640x428.jpg'
         , [new Ingredient('chicken legs forsenLUL', 2)]),
        new Recipe('Breakfast Burritos', 'Probably a good idea to make 60ish of those',
         'https://skinnyms.com/wp-content/uploads/2016/10/Zucchini-and-Egg-Breakfast-Burrito-Recipe.jpg',
         [new Ingredient('Expired leftovers', 1),
          new Ingredient('Tortillas', 10)])
    ];

    getRecipes () {
        return this.recipes.slice();
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
