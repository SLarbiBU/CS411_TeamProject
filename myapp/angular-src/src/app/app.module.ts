import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule, Headers} from "@angular/http";

import { AppComponent } from './app.component';
import { EventSearchComponent } from './Components/event-search/event-search.component';
import { SavedEventListComponent } from './Components/saved-event-list/saved-event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './Components/profile/profile.component';
import { WeatherComponent } from './Components/weather/weather.component';

import {WeatherService} from './Services/weather-service.service';


@NgModule({
  declarations: [
    AppComponent,
    EventSearchComponent,
    SavedEventListComponent,
    ProfileComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
