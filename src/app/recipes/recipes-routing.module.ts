import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { RecipeDefaultComponent } from './recipe-default/recipe-default.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';

const RecipesRoutes: Routes = [
    {path: '', component: RecipesComponent, canActivate: [AuthGuardService],
        children: [
            { path: '', component: RecipeDefaultComponent},
            { path: 'new', component: RecipeEditComponent},
            { path: ':id', component: RecipesDetailsComponent},
            { path: ':id/edit', component: RecipeEditComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(RecipesRoutes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}
