import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ShoppingListService } from 'app/services/shopping-list.service';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { RecipeService } from 'app/services/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;

  
  constructor(private shoppingListService:ShoppingListService,
              private recipeService:RecipeService,
              private route: ActivatedRoute,
            private router:Router) 
  { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.recipe = this.recipeService.getRecipe(+params['id']);
    });
  }

  public SendIngredientToShoppingList(){
    this.shoppingListService.addIngredientBatch(this.recipe.ingredients);
  }

  public editRecipe(id:number):void{
      this.router.navigate(['../','edit'],{relativeTo: this.route});
  }
}
