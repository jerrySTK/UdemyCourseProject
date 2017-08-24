import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientAmount') amount:ElementRef; 
  @ViewChild('ingredientName') name:ElementRef;
  @Output() onIngredientAdded:EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {
  }

  addIngredient():void{
    let nIngredient = new Ingredient(this.name.nativeElement.value,
                                     this.amount.nativeElement.value);
    this.onIngredientAdded.emit(nIngredient);
  }
}
