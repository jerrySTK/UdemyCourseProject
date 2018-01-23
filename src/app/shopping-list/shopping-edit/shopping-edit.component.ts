import { Component, OnInit,OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from 'app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  
  @ViewChild('ingredientForm') form:NgForm;
  @ViewChild('ingredientName') name:ElementRef;
  editMode:boolean = false;
  editIndex:number;
  editIngredientSuscription: Subscription;
  editingIngredient:Ingredient;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.editIngredientSuscription= this.shoppingListService.editingIngredient.subscribe((index:number)=>{
      this.editMode = true;
      this.editIndex = index;
      this.editingIngredient = this.shoppingListService.getIngredient(index);
      this.form.setValue({
          name: this.editingIngredient.name,
          amount: this.editingIngredient.amount
      });
    });
  }

  addIngredient():void{
    const newIngredient = new Ingredient(this.form.value.name,this.form.value.amount);

    if (this.form.valid){
      if (this.editMode){
        this.shoppingListService.updateIngredient(this.editIndex,newIngredient)
        this.editMode = false;
      }
      else
        this.shoppingListService.addIngredient(newIngredient);
      this.form.reset();                                            
    }
    
  }

  clearForm():void{
    this.form.reset();    
  }

  ngOnDestroy(){
    this.editIngredientSuscription.unsubscribe();
  }
}
