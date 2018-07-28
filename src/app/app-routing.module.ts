import { Routes, Router, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
    {path: '', redirectTo: 'recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent,
        children: [
            { path: '', component: RecipeDefaultComponent},
            { path: 'new', component: RecipeEditComponent},
            { path: ':id', component: RecipesDetailsComponent},
            { path: ':id/edit', component: RecipeEditComponent}]},
    {path: 'shopping-list', component: ShoppingListComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule  {

}
