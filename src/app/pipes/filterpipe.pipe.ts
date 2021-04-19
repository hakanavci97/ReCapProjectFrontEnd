import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/cardto';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value:CarDto[], filterText: string): CarDto[] {
    filterText=filterText?filterText.toLocaleLowerCase():""
    return (filterText?value.filter((c:CarDto)=>c.carName.toLocaleLowerCase().indexOf(filterText)!==-1
    || (c.brandName.toLocaleLowerCase().indexOf(filterText)!==-1)
    || (c.colorName.toLocaleLowerCase().indexOf(filterText)!==-1)):value);
     
  }

}
