import { Injectable,EventEmitter } from "@angular/core";
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";


@Injectable()
export class RecipeService{

    recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    private recipes:Array<Recipe> = [ 
        new Recipe( 1,
                   'R1',
                   'Description 1', 
                   'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
                    [ new Ingredient('Papa',4),
                    new Ingredient('Arraoz',4)]),
        new Recipe(2,
                   'R2',
                   'Description 2', 
                   'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/12/19/18/sush0istock-gkrphoto.jpg',
                   [ new Ingredient('Calabaza',7),
                   new Ingredient('Camaron',3)])
     ];
 
    getRecipes():Array<Recipe>{
        return this.recipes.slice();   
    }

    getRecipe(id:number):Recipe{
        var result = this.recipes.filter(e=>e.id == id);
        if (result.length > 0)
            return result[0];
        else
            return null;
    }
}