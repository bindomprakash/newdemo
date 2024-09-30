import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  pure: false
})
export class CustomPipe implements PipeTransform {

  transform(value: any, searchItem: any): any {
    return value.filter((search: any)=>{
      return search.name.toUpperCase().indexOf(searchItem.toUpperCase()) > -1
    })
  }

}
