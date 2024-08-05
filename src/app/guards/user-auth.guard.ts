import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthGuard implements CanActivate {
  public isLoggedIn$!: BehaviorSubject<boolean>;

  constructor(private Router: Router) {
    // const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    // this.isLoggedIn$ = new BehaviorSubject(isLoggedIn);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('islogin') === '1') {
      return true;
    }
    this.Router.navigate(['/', 'signin']);
    return false;
  }
}
