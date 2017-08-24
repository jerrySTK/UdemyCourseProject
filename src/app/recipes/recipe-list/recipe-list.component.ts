import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Array<Recipe> = [ new Recipe('R1','Description 1', 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'),
                            new Recipe('R2','Description 2', 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2016/12/19/18/sush0istock-gkrphoto.jpg')
                          ];


  @Output() onRecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();                          
  
  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: Recipe): void {
      this.onRecipeSelected.emit(recipe);
  }

}
