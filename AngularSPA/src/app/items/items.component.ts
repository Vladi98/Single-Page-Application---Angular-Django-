import { Component, OnInit } from '@angular/core';
import { FurnituresService } from '../services/furnitures.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private service:FurnituresService, config: NgbModalConfig, private modalService: NgbModal){

  }

  myData;

  ngOnInit() {
    this.getData().subscribe(d=>{
      this.myData = d
      console.log(d)
    })
 
  }


  open(index:number) {
    const modalRef = this.modalService.open(ModalPopupComponent);
    modalRef.componentInstance.name = this.myData[index].name;
    modalRef.componentInstance.description = this.myData[index].description;
    modalRef.componentInstance.price = this.myData[index].price;


  }
  
  getData(){
   return  (this.service.getFurnitures())

  }
}
