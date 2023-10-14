import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {

    // Use dependency injection to obtain instances of AuthService and Router
    const authService = inject(AuthService);
    const router = inject(Router);

    const isUserLoggedIn = !!authService.currentUser$.getValue();

    if (isUserLoggedIn) {
      return true;
    }

    router.navigate(['auth', 'login']);
    return false;
};

