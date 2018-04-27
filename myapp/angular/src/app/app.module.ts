import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventSearchComponent } from './Components/event-search/event-search.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { WeatherComponent } from './Components/weather/weather.component';

import {WeatherService} from './Services/weather-service.service';
import {EventsService} from './Services/events.service';
import { PastEventComponent } from './Components/past-event/past-event.component';
import { SavedEventsComponent } from './Components/saved-events/saved-events.component';
import { ResultEventComponent } from './Components/result-event/result-event.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './Components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    EventSearchComponent,
    ProfileComponent,
    WeatherComponent,
    PastEventComponent,
    SavedEventsComponent,
    ResultEventComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [WeatherService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
