import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventSearchComponent} from  './Components/event-search/event-search.component';
import {ProfileComponent}  from './Components/profile/profile.component';
import {WeatherComponent} from './Components/weather/weather.component';
import {PastEventComponent} from  './Components/past-event/past-event.component';
import {SavedEventsComponent} from  './Components/saved-events/saved-events.component';
import {ResultEventComponent} from  './Components/result-event/result-event.component';
import {BodyComponent} from './Components/body/body.component';
import {HomeComponent} from './Components/home/home.component';
import {RerouteComponent} from './Components/reroute/reroute.component';

const routes: Routes = [
  {path: 'reroute/:username', component: RerouteComponent},
  {path: 'body', component: BodyComponent, 
    children: [
      {path: 'eventSearch', component: EventSearchComponent},
      {path: 'resultEvent', component: ResultEventComponent},
      {path: 'savedEvents', component: SavedEventsComponent},
      {path: 'pastEvents', component: PastEventComponent},
      {path: '', redirectTo: 'eventSearch', pathMatch: 'full'}
    ]
  },
  {path: 'login', component: HomeComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

//<a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
