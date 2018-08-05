import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { config } from '../firebase-setup';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(private http: HttpClient, private recipeSrv: RecipeService,
    private authService: AuthService) { }

  private recipeChangedSub: Subscription;

  syncOnAppLoad () {
    this.http.get<Recipe []>(config.databaseURL + '/recipes.json', {
      params: new HttpParams().set('auth', this.authService.token)
    })
      .subscribe((next) => {
        this.recipeSrv.setRecipes(next);
        this.recipeChangedSub = this.recipeSrv.recipesChanged.subscribe((recipes) => this.pushRecipes(recipes));
    });
  }

  pushRecipes(recipes: Recipe[]) {

    this.http.put(config.databaseURL + '/recipes.json' , {
      params: new HttpParams().set('auth', this.authService.token)
    })
      .subscribe((next) => {
        return next;
      });
  }

  onRecipesClosed() {
    this.recipeChangedSub.unsubscribe();
  }

}
