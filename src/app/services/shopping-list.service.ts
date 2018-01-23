import { Injectable } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";
import { Subject } from "rxjs/Subject";



@Injectable()
export class ShoppingListService{
    private ingredients:Array<Ingredient> = new Array<Ingredient>();
    public ingredientsChange: Subject<Array<Ingredient>> = new Subject<Array<Ingredient>>();
    editingIngredient: Subject<number> = new Subject<number>();

    public addIngredient(ingredient:Ingredient):void{
        this.ingredients.push(ingredient);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    public addIngredientBatch(ingredients:Array<Ingredient>){
        this.ingredients.push(...ingredients);
        this.ingredientsChange.next(this.ingredients.slice());
    }

    public getIngredient(index:number):Ingredient{
        return this.ingredients[index];
    }

    public getLisfOfIngredients():Array<Ingredient>
    {
        return this.ingredients.slice();
    }

    public startEditing(index:number){
        this.editingIngredient.next(index);
    }

    public updateIngredient(index:number,newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChange.next(this.ingredients.slice());
    }
}