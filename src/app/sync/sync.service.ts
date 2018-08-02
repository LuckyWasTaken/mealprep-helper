import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { config } from '../firebase-setup';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(private http: Http, private recipeSrv: RecipeService,
    private authService: AuthService) { }

  private recipeChangedSub: Subscription;

  syncOnAppLoad () {
    this.http.get(config.databaseURL + '/recipes.json?auth=' + this.authService.token)
      .subscribe((next: Response) => {
        this.recipeSrv.setRecipes(next.json());
        this.recipeSrv.recipesChanged.subscribe((recipes) => this.pushRecipes(recipes));
    });
  }

  pushRecipes(recipes: Recipe[]) {

    this.http.put(config.databaseURL + '/recipes.json?auth=' + this.authService.token, recipes)
      .subscribe((next: Response) => {
        return next;
      });
  }

}
