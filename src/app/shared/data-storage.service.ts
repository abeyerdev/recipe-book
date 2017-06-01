import { RecipeService } from './recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from 'app/recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from 'app/auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) { }

    // subscribing directly here since we don't care about handling anything in the header component
    getRecipes() {
        const token = this.authService.getToken();

        return this.http.get('https://recipe-book-e0d0c.firebaseio.com/recipes.json?auth=' + token)
        .map((response: Response) => {
            const recipes: Recipe[] = response.json();
            for ( const recipe of recipes) {
                if (!recipe['ingredients']) {
                    console.log(recipe);
                    recipe['ingredients'] = [];
                }
            }

            return recipes;
        })
        .subscribe(
            (recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            }
        );
    }

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://recipe-book-e0d0c.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }
}