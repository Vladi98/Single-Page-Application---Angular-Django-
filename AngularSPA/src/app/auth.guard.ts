import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegistrationService } from './services/registration.service';
import { ok } from 'assert';
import { LoginComponent } from './login/login.component';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service:RegistrationService,private log: LoginComponent,private route:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean {
    //console.log(this.comp.registerUser())

    if(this.service.isAuthenticated()){
      return true
    }
    else {
      this.route.navigate([''])
      return false
    };
  }
  
}
