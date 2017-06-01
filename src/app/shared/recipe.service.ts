import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs/Subject';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('burger one', 'a burger',
               'http://aht.seriouseats.com/images/20100817-googleburger.jpg',
                [new Ingredient('Meat', 1), new Ingredient('French Fries', 25)]),
    new Recipe('burger two', 'a similar burger',
               'http://aht.seriouseats.com/images/20100817-googleburger.jpg',
                [new Ingredient('Meat', 2), new Ingredient('French Fries', 35)]),
    new Recipe('burger three', 'another burger',
               'http://aht.seriouseats.com/images/20100817-googleburger.jpg',
                [new Ingredient('Meat', 3), new Ingredient('French Fries', 45)])
  ];

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); // return a copy, not reference
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  removeIngredientFromRecipe(ingredientIndex: number, recipeIndex: number) {
    const ingredients = this.recipes[recipeIndex].ingredients;
    ingredients.splice(ingredientIndex, 1);

    this.recipesChanged.next(this.recipes.slice());
  }

  removeRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
