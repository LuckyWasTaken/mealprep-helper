import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const {name, amount} = form.value;
    this.store.dispatch(new ShoppingListActions.AddIngredient(new Ingredient(name, amount)));
    form.reset();
  }
}
