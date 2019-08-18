import { Component, OnInit } from '@angular/core';
import { FurnituresService } from 'src/app/services/furnitures.service';
import { Furniture } from '../furniture';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(private service:FurnituresService) { }
  tables :Furniture[]
  ngOnInit() { 
    this.getTables().subscribe(res=>{
      this.tables = res.filter(x=>x.category==34)
    })
  }


  getTables(){
    return this.service.getFurnitures() 
    
  }
}
