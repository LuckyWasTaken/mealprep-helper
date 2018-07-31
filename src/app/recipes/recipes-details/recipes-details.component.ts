import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeSrv: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeSrv.getRecipe(this.id);
    });
  }

  toShoppingList() {
    this.recipeSrv.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDelete() {
    this.recipeSrv.deleteRecipe(this.id);
    this.router.navigate(['..'], {relativeTo: this.route});
  }
}
