import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  recipes: Recipe[] = [];
  recipesChangedSubscription: Subscription;


  constructor(private recipeSrv: RecipeService) { }


  ngOnInit() {
    this.recipesChangedSubscription = this.recipeSrv.recipesChanged.subscribe((next) => {
      this.recipes = next;
    });
    this.recipes = this.recipeSrv.getRecipes();
  }

  ngOnDestroy() {
    this.recipesChangedSubscription.unsubscribe();
  }

}
