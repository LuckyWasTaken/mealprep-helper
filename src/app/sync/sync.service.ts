import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { dbURL } from './firebase-url';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(private http: Http, private recipeSrv: RecipeService) { }

  private recipeChangedSub: Subscription;

  syncOnAppLoad () {
    const data = this.http.get(dbURL + '/recipes.json')
      .subscribe((next: Response) => {
        this.recipeSrv.setRecipes(next.json());
        this.recipeSrv.recipesChanged.subscribe((recipes) => this.pushRecipes(recipes));
      });
  }

  pushRecipes(recipes: Recipe[]) {

    this.http.put(dbURL + '/recipes.json', recipes)
      .subscribe((next: Response) => {
        return next;
      });
  }

}
