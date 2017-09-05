import {TimePoint} from '../timepoint/timepoint';
import {Athlete} from '../athlete/athlete';

export class Time {
  id: number;
  value: Date;
  timePoint: TimePoint;
  athlete: Athlete;

  constructor(properties?) {
    properties = properties ? properties : {};
    this.id = properties.id;
    this.value = properties.value;
    this.timePoint = properties.timePoint;
    this.athlete = properties.athlete;
  }

  convertToUTCTime() {
    this.value.setUTCHours(this.value.getHours());
    this.value.setMinutes(this.value.getMinutes());
    this.value.setUTCSeconds(this.value.getSeconds());
  }
}
