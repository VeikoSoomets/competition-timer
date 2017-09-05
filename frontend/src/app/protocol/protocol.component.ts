import { Component, OnInit } from '@angular/core';
import {ProtocolService} from './protocol.service';
import {Time} from '../time/time';
import {ArrayUtil} from '../general/array-util';

@Component({
  selector: 'app-protocol',
  templateUrl: './protocol.component.html'
})
export class ProtocolComponent implements OnInit {
  times: Time[];
  groupedTimes = {};
  NO_OF_ATHLETES_IN_LIST = 5;

  constructor(private protocolService: ProtocolService) { }

  ngOnInit() {
    if (!this.times) {
      this.times = [];
    }
    this.protocolService.getTimes().subscribe((data: Time[]) => {
      this.times = this.times.concat(data);
      // First we will group times by timepoints and then we will sort the arrays and take top 5 times
      this.groupedTimes = ArrayUtil.groupBy(this.times, 'timePoint', 'description');
      for (let groupedTime in this.groupedTimes) {
        this.groupedTimes[groupedTime] = ArrayUtil.sortTimesBySeconds(this.groupedTimes[groupedTime]);
        this.groupedTimes[groupedTime] = this.groupedTimes[groupedTime].slice(0, this.NO_OF_ATHLETES_IN_LIST);
      }
    });
  }
}
