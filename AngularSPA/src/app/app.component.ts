import { Component } from '@angular/core';
import { FurnituresService } from './services/furnitures.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application';

  constructor(private service:FurnituresService){}
    
  myData;
  searchText;
  ngOnInit() {
    this.getData().subscribe(d=>{
      this.myData = d
      console.log(d)
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
}
