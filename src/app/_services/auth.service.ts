import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private router: Router) {}

  logIn(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.isLoggedIn = val;
        if (this.redirectUrl) {
          this.router.navigateByUrl(this.redirectUrl);
        }
      })
    );
  }

  logOut(): void {
    this.isLoggedIn = false;
  }
}
