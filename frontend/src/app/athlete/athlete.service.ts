import {Injectable} from '@angular/core';
import {EnvironmentUtil} from '../../environments/environment-util';
import {Athlete} from './athlete';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AthleteService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = EnvironmentUtil.getApiUrl();
  }

  getAthletes() {
    return this.http.get(this.url + '/athletes');
  }

  addAthlete(athlete: Athlete): Observable<Athlete>{
    return this.http.post(this.url + '/add-athlete', athlete);
  }
}
