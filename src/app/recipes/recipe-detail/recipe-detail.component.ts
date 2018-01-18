import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ShoppingListService } from 'app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe:Recipe;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  public SendIngredientToShoppingList(){
    this.shoppingListService.addIngredientBatch(this.recipe.ingredients);
  }
}
