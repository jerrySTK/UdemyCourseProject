import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from 'app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientAmount') amount:ElementRef; 
  @ViewChild('ingredientName') name:ElementRef;
  
  
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient():void{

    this.shoppingListService.addIngredient(new Ingredient(this.name.nativeElement.value,
                                                          this.amount.nativeElement.value));
    
  }
}
