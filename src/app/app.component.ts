import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipesOptionSelected:Boolean = true;
  shoppingOptionSelected:Boolean = false;

  onOptionSelected(option:string):void{
    switch(option){
      case 'recipes':
        this.recipesOptionSelected = true;
        this.shoppingOptionSelected = false;
        break;
      case 'shopping-list':
      this.recipesOptionSelected = false;
      this.shoppingOptionSelected = true;
    }
  }
}
