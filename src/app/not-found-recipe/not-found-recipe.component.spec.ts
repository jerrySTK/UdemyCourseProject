import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRecipeComponent } from './not-found-recipe.component';

describe('NotFoundRecipeComponent', () => {
  let component: NotFoundRecipeComponent;
  let fixture: ComponentFixture<NotFoundRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
