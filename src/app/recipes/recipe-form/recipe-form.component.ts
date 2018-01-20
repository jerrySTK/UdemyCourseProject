import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  private id:number;
  private editMode:boolean = false;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
  }

}
