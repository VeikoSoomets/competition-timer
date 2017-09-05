import {Routes} from '@angular/router';
import {AthleteComponent} from './athlete/athlete.component';
import {ProtocolComponent} from './protocol/protocol.component';
import {TimeComponent} from './time/time.component';

export const ROUTES: Routes = [
  {path: 'add-athlete', component: AthleteComponent},
  {path: 'add-time', component: TimeComponent},
  {path: '', component: ProtocolComponent}
];
