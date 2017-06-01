import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from 'app/auth/auth.module';
import { AuthGuard } from 'app/auth/auth-guard.service';
import { AuthService } from 'app/auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'app/core/core.module';
import { DataStorageService } from 'app/shared/data-storage.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RecipeService } from 'app/shared/recipe.service';
import { ShoppingListService } from './shared/shopping-list.service';
import { SharedModule } from 'app/shared/shared.module';
import { ShoppingListModule } from 'app/shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    CoreModule,
    BrowserModule,
    HttpModule,
    SharedModule,
    ShoppingListModule
  ],
  // if we don't provide these services here (or in the CoreModule), we will lose the instances of these services
  // when we navigate to different areas of our app ie. we will lose any new recipes when
  // navigating to shopping list if we only provide the RecipeService in Recipe components.
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
