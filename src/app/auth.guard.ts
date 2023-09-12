import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

import { AuthService } from './auth.service';

// NOUVELLE METHODE 2023
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn) {
    return true;
  }
    
  router.navigate(['/login']);
  return false;
}

// A FAIRE AVANT 2023
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(
//     private authService: AuthService,
//     private router: Router
//     ) {}

//   canActivate(): boolean {
//     if(this.authService.isLoggedIn) {
//       return true;
//     }
    
//     this.router.navigate(['/login']);
//     return false;
//   }

// }