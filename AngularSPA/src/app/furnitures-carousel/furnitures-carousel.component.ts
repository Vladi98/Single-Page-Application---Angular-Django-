import { Component, OnInit } from '@angular/core';
import { FurnituresService } from '../services/furnitures.service';
import { Observable, of,Subscription } from 'rxjs';
import { delay, share } from 'rxjs/operators';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-furnitures-carousel',
  templateUrl: './furnitures-carousel.component.html',
  styleUrls: ['./furnitures-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class FurnituresCarouselComponent implements OnInit {

  constructor(private service:FurnituresService,config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  
  myData;
  ngOnInit() {
    this.getData().subscribe(d=>{
      this.myData = d
    })
 
  }
    
  
  getData(){
   return  (this.service.getFurnitures())

  }
}