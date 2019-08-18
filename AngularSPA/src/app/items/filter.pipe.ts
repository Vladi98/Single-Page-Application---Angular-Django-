import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items:any, term:string): any {
    
    if(term==undefined || term ==null){
       return items;
     }

     return items.filter((i)=>{
       return i.name.toLowerCase().includes(term.toLowerCase())
     })
  }

}
