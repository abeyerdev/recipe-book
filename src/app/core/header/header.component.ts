import { Component } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';
import { Response } from '@angular/http';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private dataStorgeService: DataStorageService, public authService: AuthService) {}

  onFetchData() {
    this.dataStorgeService.getRecipes();
  }

  onSaveData() {
    this.dataStorgeService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }
}
