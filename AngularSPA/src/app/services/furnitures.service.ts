import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Furniture } from '../categories/furniture';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FurnituresService {

  URL = `http://djangorestapidata.herokuapp.com/furnitures/`;
  constructor(private httpClient:HttpClient) { }


  getFurnitures():Observable<Furniture[]>{
    return this.httpClient.get<Furniture[]>(this.URL)
  }

  


}
