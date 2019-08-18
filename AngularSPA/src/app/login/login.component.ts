import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Observable, of } from 'rxjs';
import { error } from 'util';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  log;
  errorText
  token:Object;
  constructor(private service:RegistrationService,private myRoute:Router) {
    this.errorText="Enter text";
    this.token = {} 
  }
  ngOnInit() {
    this.log ={
      "username": "",
      "password": ""
    }
  }

  login(){
     this.service.generateToken(this.log).subscribe(response=>{
      alert('User ' +this.log.username +' logged in successfully')
      this.myRoute.navigate(['/home']);
      
    },(error=>{
      alert("Invalid credentials! Please try again!")
    })
    )
  
  }

 

}
