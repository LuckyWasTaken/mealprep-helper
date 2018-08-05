import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';


export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_MULTIPLE = 'ADD_MULTIPLE';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;

    constructor(public payload: Ingredient) {}
}

export class AddMultiple implements Action {
    readonly type = ADD_MULTIPLE;

    constructor(public payload: Ingredient[]) {}
}

export class DeleteIngredient implements Action {
    readonly type = DELETE_INGREDIENT;

    constructor(public payload: number) {}
}

export type ShoppingListActions = AddIngredient | AddMultiple | DeleteIngredient;
