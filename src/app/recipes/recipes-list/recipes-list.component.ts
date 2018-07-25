import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() showRequest = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken tikka masala', 'Just a test recipe', 'http://assets.kraftfoods.com/recipe_images/opendeploy/173356_640x428.jpg'),
    new Recipe('Breakfast Burritos', 'Probably a good idea to make 60ish of those',
     'https://skinnyms.com/wp-content/uploads/2016/10/Zucchini-and-Egg-Breakfast-Burrito-Recipe.jpg')
  ];

  constructor() { }

  onRecipeSelected(recipe: Recipe) {
    this.showRequest.emit(recipe);
  }

  ngOnInit() {
  }

}
