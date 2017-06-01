import { AuthGuard } from 'app/auth/auth-guard.service';
import { NgModule } from '@angular/core';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';
import { Routes, RouterModule } from '@angular/router';

const recipesRoutes: Routes = [
    { path: '', component: RecipesComponent,
        children: [
            { path: '', component: RecipeStartComponent },
            // new should come before :id, otherwise app will always think we're calling :id with 'new' as parameter
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes) // since we are no longer on the root router, we register as child here
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }
