import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmailValidator } from '@angular/forms';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService{

  URL = "https://djangorestapidata.herokuapp.com";
  arguments:any;
  token;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private httpClient:HttpClient, private router:Router) {

  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  registerUser(data){

    return this.httpClient.post(this.URL + "/users/",data,{ observe: 'response' })
  }

  getUsers(){
    return this.httpClient.get(this.URL+"/users/");
  }

  generateToken(data){
    return this.httpClient.post(this.URL+"/auth/",data,{observe:"response"}).pipe(map(x=>this.token=x.status))
  }


  isAuthenticated(){
    if(this.token==200){
      this.loggedIn.next(true)
      return true;
    }
    this.loggedIn.next(false)
    return false;
  }

  logout(){
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }

 
}
