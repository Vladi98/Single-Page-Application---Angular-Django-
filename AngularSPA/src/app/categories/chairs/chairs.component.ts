import { Component, OnInit } from '@angular/core';
import { FurnituresService } from 'src/app/services/furnitures.service';
import { Furniture } from '../furniture';
import { find } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chairs',
  templateUrl: './chairs.component.html',
  styleUrls: ['./chairs.component.css']
})
export class ChairsComponent implements OnInit {

  constructor(private service:FurnituresService) { }
  chairs :Furniture[]
  ngOnInit() { 
    this.getChairs(1).subscribe(res=>{
      this.chairs = res.filter(x=>x.category==2)
    })
  }


  getChairs(id:number){
    return this.service.getFurnitures() 
    
  }

}
