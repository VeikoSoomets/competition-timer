import {Injectable} from '@angular/core';
import {EnvironmentUtil} from '../../environments/environment-util';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {TimePoint} from './timepoint';

@Injectable()
export class TimePointService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = EnvironmentUtil.getApiUrl();
  }

  getTimePoints(): Observable<TimePoint[]>{
    return this.http.get(this.url + '/timepoints');
  }
}
