import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
    providedIn: 'root'
})

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

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

    addIngredientsToShoppingList (ingredients: Ingredient[]) {
        this.shoppingSrv.addMultiple(ingredients);
    }

    constructor(private shoppingSrv: ShoppingListService) { }

}
