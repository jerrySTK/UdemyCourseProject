import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from 'app/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';

import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { RecipeFormComponent } from 'app/recipes/recipe-form/recipe-form.component';
import { NotFoundRecipeComponent } from 'app/not-found-recipe/not-found-recipe.component';


const AppRoutes:Routes = [
  {path: 'Recipes' , component: RecipesComponent, children: [
      {path: 'create',component:RecipeFormComponent},
      {path: ':id/detail',component:RecipeDetailComponent},
      {path: ':id/edit',component:RecipeFormComponent},
      {path: '**', component:NotFoundRecipeComponent}
  ]},
  {path: 'ShoppingList', component: ShoppingListComponent},
  {path: '',redirectTo:'Recipes',pathMatch:'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
