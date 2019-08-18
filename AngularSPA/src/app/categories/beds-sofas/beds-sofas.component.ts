import { Component, OnInit } from '@angular/core';
import { FurnituresService } from 'src/app/services/furnitures.service';
import { Furniture } from '../furniture';

@Component({
  selector: 'app-beds-sofas',
  templateUrl: './beds-sofas.component.html',
  styleUrls: ['./beds-sofas.component.css']
})
export class BedsSofasComponent implements OnInit {

  constructor(private service:FurnituresService) { }
  items:Furniture[];
  ngOnInit() { 
    this.getBeds().subscribe(res=>{
      this.items = res.filter(x=>x.category==1)
    })
  }

  getBeds(){
    return this.service.getFurnitures()
  }

}
