import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean> | boolean {
    return this.authService.user.pipe(
      map((user) => {
        const isAuth = !!user;
        console.log({ user });
        if (state.url !== '/auth') {
          return isAuth || this.router.createUrlTree(['auth']);
        } else {
          return !isAuth || this.router.createUrlTree(['']);
        }
      })
    );
  }
}
