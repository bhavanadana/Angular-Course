import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatetext'
})
export class TruncatetextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
  
    let textLength = args?args: 100;
    if(value.length>textLength){
      return value.substring(0,textLength)+' ..';
    }
    
    return value;
  }

}
