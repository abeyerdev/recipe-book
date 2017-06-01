import { AuthGuard } from 'app/auth/auth-guard.service';
import { AppRoutingModule } from 'app/app-routing.module';
import { AuthService } from 'app/auth/auth.service';
import { DataStorageService } from 'app/shared/data-storage.service';
import { HeaderComponent } from 'app/core/header/header.component';
import { HomeComponent } from 'app/core/home/home.component';
import { NgModule } from '@angular/core';
import { RecipeService } from 'app/shared/recipe.service';
import { SharedModule } from 'app/shared/shared.module';
import { ShoppingListService } from 'app/shared/shopping-list.service';

@NgModule({
    imports: [
        AppRoutingModule,
        SharedModule,
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent ],
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    providers: [
        AuthGuard,
        AuthService,
        ShoppingListService,
        RecipeService,
        DataStorageService,
    ],
})
export class CoreModule { }
