import { Injectable,EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";



@Injectable()
export class ShoppingListService{
    private ingredients:Array<Ingredient> = new Array<Ingredient>();
    public ingredientsChange: EventEmitter<Array<Ingredient>> = new EventEmitter<Array<Ingredient>>();

    public addIngredient(ingredient:Ingredient):void{
        this.ingredients.push(ingredient);
        this.ingredientsChange.emit(this.ingredients.slice());
    }

    public addIngredientBatch(ingredients:Array<Ingredient>){
        this.ingredients.push(...ingredients);
        this.ingredientsChange.emit(this.ingredients.slice());
    }

    public getLisfOfIngredients():Array<Ingredient>
    {
        return this.ingredients.slice();
    }
}