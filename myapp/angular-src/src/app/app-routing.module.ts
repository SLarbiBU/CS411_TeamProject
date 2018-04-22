import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventSearchComponent} from  './Components/event-search/event-search.component';
import {SavedEventListComponent} from  './Components/saved-event-list/saved-event-list.component';
import {ProfileComponent}  from './Components/profile/profile.component';
import {WeatherComponent} from './Components/weather/weather.component';


const routes: Routes = [
  {path: 'eventSearch', component: EventSearchComponent},
  {path: 'savedEvents', component: SavedEventListComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'weather', component: WeatherComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
