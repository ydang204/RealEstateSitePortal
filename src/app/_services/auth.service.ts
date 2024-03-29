import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router) {
    if (localStorage.getItem('isLoggedIn')) {
      this.isLoggedIn = true;
    }
  }

  logIn(): Observable<boolean> | boolean {
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedIn = true;
    this.router.navigateByUrl(this.redirectUrl);
    return true;
  }

  logOut(): void {
    this.isLoggedIn = false;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
