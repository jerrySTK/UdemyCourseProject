import { Injectable,EventEmitter } from "@angular/core";
import { Recipe } from '../recipes/recipe.model';



@Injectable()
export class RecipeService{

    recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    private recipes:Array<Recipe> = [ new Recipe('R1','Description 1', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'),
                              new Recipe('R2','Description 2', 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/12/19/18/sush0istock-gkrphoto.jpg')
                            ];
 
    getRecipes():Array<Recipe>{
        return this.recipes.slice();   
    }
}