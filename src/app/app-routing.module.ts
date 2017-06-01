import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from 'app/core/home/home.component';

// What if you want to use route protection (canActivate  to be precise) on lazily loaded routes?

// You can add canActivate to the lazy loaded routes but that of course means, that you might load code which in the end 
// can't get accessed anyways. It would be better to check that BEFORE loading the code.

// You can enforce this behavior by adding the canLoad  guard to the route which points to the lazily loaded module:

// { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] }

// In this example, the AuthGuard  should implement the CanLoad interface.

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, // lazy loading for entire recipe module from relative path
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  // pre-load lazy loaded modules (ie. not upfront, but between app load and user visiting relevant module) with preloadingStrategy
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
