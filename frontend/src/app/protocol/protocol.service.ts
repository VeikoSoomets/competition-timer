import {Injectable} from '@angular/core';
import {EnvironmentUtil} from '../../environments/environment-util';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Time} from '../time/time';
import {WebsocketService} from '../websocket/websocket.service';

@Injectable()
export class ProtocolService {
  private url: string;
  private wsUrl: string;

  constructor(public http: HttpClient, public webSocketService: WebsocketService) {
    this.url = EnvironmentUtil.getApiUrl();
    this.wsUrl = EnvironmentUtil.getApiWsUrl();
  }

  getTimes(): Subject<Time[]> {
    return <Subject<Time[]>>this.webSocketService.connect(this.wsUrl + '/times')
      .map((response: MessageEvent): Time[] => {
        return JSON.parse(response.data);
      });
  }
}
