import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Array<Ingredient> = [];

  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient):void{
    this.ingredients.push(ingredient);
  }
}
