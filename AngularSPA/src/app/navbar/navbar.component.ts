import { Component, OnInit } from '@angular/core';
import { FurnituresService } from '../services/furnitures.service';
import { Observable } from 'rxjs';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:FurnituresService,private registerService:RegistrationService,private router:Router){}
  myData;
  searchText;
  isLoggedIn$: Observable<boolean>;

  ngOnInit() {
    this.isLoggedIn$ = this.registerService.isLoggedIn;
    this.getData().subscribe(d=>{
      this.myData = d
    })
    
 
  }
  
  displayResults(){
    return this.getData().subscribe(d=>{
       d.includes(this.searchText)
    })
  }
  
  getData(){
   return  (this.service.getFurnitures())
  }

  onlogout(){
    this.registerService.logout();
  }
}
