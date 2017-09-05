import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ROUTES} from './app.routes';
import { AppComponent } from './app.component';
import {AthleteComponent} from './athlete/athlete.component';
import {AthleteService} from './athlete/athlete.service';
import {HttpClientModule} from '@angular/common/http';
import {TabMenuModule} from 'primeng/components/tabmenu/tabmenu';
import {ProtocolComponent} from './protocol/protocol.component';
import {TimeComponent} from './time/time.component';
import {TimeService} from './time/time.service';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TimePointService} from './timepoint/timepoint.service';
import {ProtocolService} from './protocol/protocol.service';
import {WebsocketService} from './websocket/websocket.service';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {MapToIterablePipe} from './general/map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AthleteComponent,
    ProtocolComponent,
    TimeComponent,
    MapToIterablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    BrowserAnimationsModule,
    CalendarModule,
    DialogModule
  ],
  providers: [
    AthleteService,
    TimeService,
    TimePointService,
    ProtocolService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
