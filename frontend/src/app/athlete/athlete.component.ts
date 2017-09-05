import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Athlete} from './athlete';
import {AthleteService} from './athlete.service';

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html'
})
export class AthleteComponent implements OnInit {
  public athleteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private athleteService: AthleteService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.athleteForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      chipId: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      startingNumber: [null, [Validators.required, Validators.pattern(/^\d+$/)]]
    })
  }

  save(athlete: Athlete) {
    this.athleteService.addAthlete(athlete).subscribe((athlete) => this.initForm());
  }

}
