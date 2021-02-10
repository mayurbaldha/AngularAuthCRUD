import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor() { }
  authenticationState = new BehaviorSubject(false);
  userObj: any;

  constructor( private router:Router ) {
        this.checkToken();
  }

  login( accessToken, profile) {
    this.userObj= profile;
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('accessToken', accessToken);
    this.router.navigate(['event-list']);
    this.authenticationState.next(true);
  }

  changeStateToReady() {
    this.authenticationState.next(true);
  }

  logout() {
     localStorage.clear()
    this.authenticationState.next(false);
      // console.log('User LoggedOut');
    
  }

  getUserObj() {
    return this.userObj;
  }

  setUserObj(val) {
    this.userObj = val;
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
     
      if (localStorage.getItem('accessToken')) {
        this.authenticationState.next(true);
      }else{
        this.authenticationState.next(false);
      }

  }
}
