import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {

  register;
  constructor(private service:RegistrationService,private myRoute: Router) { }


  user =""
  ngOnInit() {
    this.register ={
      "username": "",
      "email": "",
      "password": ""
    }
  }

    registerUser(){
      this.service.registerUser(this.register).subscribe(response=>{
      alert('User ' +this.register.username +' registered successfully')
      this.myRoute.navigate([''])
    },(error=>{
      alert("Invalid credentials! Please try again!")
    })
    )
   
  }



}
