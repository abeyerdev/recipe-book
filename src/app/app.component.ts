import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  loadedFeature = 'recipe';

  ngOnInit() {
    // these values come from Firebase web setup config
    firebase.initializeApp({
      apiKey: 'AIzaSyCWr9rNGFDvKMuTvhgwGMcnRBhwR_1cVoI',
      authDomain: 'recipe-book-e0d0c.firebaseapp.com'
    });
  }

  onNavigate(feature){
    this.loadedFeature = feature;
  }
}
