import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Time} from './time';
import {TimeService} from './time.service';
import {TimePoint} from '../timepoint/timepoint';
import {TimePointService} from '../timepoint/timepoint.service';
import {Athlete} from '../athlete/athlete';
import {AthleteService} from '../athlete/athlete.service';
import {ArrayUtil} from '../general/array-util';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['time.component.css']
})
export class TimeComponent implements OnInit {
  public timeForm: FormGroup;
  public timePoints: TimePoint[] = [];
  public showModal = false;
  public athletes: Athlete[] = [];

  constructor(private formBuilder: FormBuilder, private timeService: TimeService, private timePointService: TimePointService,
              private athleteService: AthleteService) { }

  ngOnInit() {
    this.initForm();
    this.timePointService.getTimePoints().subscribe(timePoints => {
      this.timePoints = timePoints;
    });
  }

  initForm() {
    this.timeForm = this.formBuilder.group({
      value: [null, [Validators.required]],
      athlete: this.formBuilder.group({
        id: [null, [Validators.required]],
        name: [null],
        chipId: [null],
        startingNumber: [null]
      }),
      timePoint: this.formBuilder.group({
        id: [null, [Validators.required]],
        description: [null]
      })
    })
  }

  save(item: Object) {
    let time = new Time(item);
    time.convertToUTCTime();
    time.timePoint = <TimePoint>ArrayUtil.findObjectByProperty(this.timePoints, item['timePoint'], 'id');
    this.timeService.addTime(time).subscribe((time) => this.initForm());
  }

  displayModal() {
    this.showModal = true;
    this.athleteService.getAthletes().subscribe((athletes: Athlete[]) => {
      this.athletes = athletes;
    });
  }

  hideModal(athlete: Athlete) {
    this.showModal = false;
    this.timeForm.patchValue({athlete: athlete});
  }
}
