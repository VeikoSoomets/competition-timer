import {Injectable} from '@angular/core';
import {EnvironmentUtil} from '../../environments/environment-util';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Time} from './time';

@Injectable()
export class TimeService {
  url: string;

  constructor(public http: HttpClient) {
    this.url = EnvironmentUtil.getApiUrl();
  }

  addTime(time: Time): Observable<Time>{
    return this.http.post(this.url + '/add-time', time);
  }
}
