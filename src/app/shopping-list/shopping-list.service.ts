import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [new Ingredient('Beans can', 5),
        new Ingredient('Milk bottle', 1)];

    getIngredients () {
        return this.ingredients.slice();
    }

    addIngredient (ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients);
    }

    addMultiple (ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients);
    }

    deleteIngredient (id: number) {
        this.ingredients.splice(id, 1);
        this.ingredientsChanged.next(this.ingredients);
    }
}
