import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recipeSrv: RecipeService,
    private router: Router) { }
  recipeForm: FormGroup;
  id: number;
  editMode = false;


  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm() {
    const currRecipe = this.editMode ? this.recipeSrv.getRecipe(this.id) : new Recipe('', '', '', []);
    const {name, description, imagePath, ingredients} = currRecipe;
    const formIngredients = new FormArray([]);
    if (ingredients) {
      for (const ing of ingredients) {
        formIngredients.push(new FormGroup({
          'name': new FormControl(ing.name, Validators.required),
          'amount': new FormControl(ing.amount, [Validators.required,
                                Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(description, Validators.required),
      'ingredients': formIngredients
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeSrv.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeSrv.addRecipe(this.recipeForm.value);
    }
    this.navigateUpward();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.navigateUpward();
  }

  navigateUpward() {
    this.router.navigate(['..'], {relativeTo: this.route} );
  }
}
