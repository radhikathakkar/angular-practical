import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../services/auth.service';
import { SignupComponent } from '../signup/signup.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanDeactivate<LoginComponent | SignupComponent> {
  constructor(private authService: AuthService,
    private router: Router) {}
  canDeactivate(
    component: LoginComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
   
    return window.confirm('Are you sure? you will logout from application');
  }
}
