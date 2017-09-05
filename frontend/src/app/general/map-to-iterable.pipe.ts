import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'mapToIterable'})
export class MapToIterablePipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    let keyArr: any[] = Object.keys(value),
      dataArr = [];

    keyArr.forEach((key: any) => {
      dataArr.push(value[key]);
    });
    return dataArr;
  }
}
