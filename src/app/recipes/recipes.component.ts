import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  show(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
  }

  ngOnInit() {
  }

}