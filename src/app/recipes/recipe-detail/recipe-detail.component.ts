import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipe.service';
import { ShoppingListService } from '../../shared/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  addToShoppingList() {
    this.shoppingListService.addIngredientsFromRecipe(this.recipe);
  }

  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.route } ); perfectly fine
    // this is purposely complex to demonstrate capabilities
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route }); 
  }

}
