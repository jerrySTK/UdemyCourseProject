import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from 'app/services/shopping-list.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients:Array<Ingredient> = [];
  ingredientSuscription:Subscription;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getLisfOfIngredients();
    this.ingredientSuscription = this.shoppingListService.ingredientsChange.subscribe((ingredientes:Array<Ingredient>)=>{
      this.ingredients = ingredientes;
    });
  }

  editIngredient(index:number){
    this.shoppingListService.startEditing(index);
  }

  ngOnDestroy(){
    this.ingredientSuscription.unsubscribe();
  }
}
