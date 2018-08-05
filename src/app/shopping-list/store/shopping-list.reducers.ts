import * as ShoppingListActions from './shopping-list.actions';

import { Ingredient } from '../../shared/ingredient.model';



const initialState = {
    ingredients : []
};


export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_MULTIPLE:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.DELETE_INGREDIENT:
        const oldIngredients = [...state.ingredients];
        oldIngredients.splice(action.payload, 1);
            return {
                ...state,
                ingredients: oldIngredients
            };
        default:
            return state;
    }
}
