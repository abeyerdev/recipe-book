import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) { }

    getToken() {
        firebase.auth().currentUser.getToken().then(
            (token: string) => this.token = token
        );

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken().then(
                    (token: string) => this.token = token
                );
            },
            error => console.log(error)
        );
    }

    // we only care about errors here that's why we're not doing
    // anything with the response otherwise
    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(
            error => console.log(error)
        );
    }
}