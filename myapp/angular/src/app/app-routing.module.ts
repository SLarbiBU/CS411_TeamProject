import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventSearchComponent} from  './Components/event-search/event-search.component';
import {ProfileComponent}  from './Components/profile/profile.component';
import {WeatherComponent} from './Components/weather/weather.component';
import {PastEventComponent} from  './Components/past-event/past-event.component';
import {SavedEventsComponent} from  './Components/saved-events/saved-events.component';
import {ResultEventComponent} from  './Components/result-event/result-event.component';

const routes: Routes = [
  {path: 'eventSearch', component: EventSearchComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'pastEvents', component: PastEventComponent},
  {path: 'savedEvents', component: SavedEventsComponent},
  {path: 'resultEvent', component: ResultEventComponent},
  {path: '', redirectTo: '/eventSearch', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
