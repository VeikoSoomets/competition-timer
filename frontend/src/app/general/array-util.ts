import {Time} from '../time/time';

export class ArrayUtil {

  static sortTimesBySeconds(array: Array<Time>): Array<Time> {
    return array.sort((function(a:Time, b:Time){
      let getSeconds = (date: Date) => {return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()};
      let aDate = new Date(a.value);
      let bDate = new Date(b.value);
      return getSeconds(aDate) - getSeconds(bDate);
    }));
  }

  static findObjectByProperty(array: Array<any>, object: Object, property: string): Object {
    return array.find((obj) => {
      return object[property] === obj[property];
    })
  }

  static groupBy(array, key, nestedKey?) {
    return array.reduce(function(accumulator, currentValue) {
      if (nestedKey) {
        (accumulator[currentValue[key][nestedKey]] = accumulator[currentValue[key][nestedKey]] || []).push(currentValue);
      } else {
        (accumulator[currentValue[key]] = accumulator[currentValue[key]] || []).push(currentValue);
      }
      return accumulator;
    }, {});
  }
}
