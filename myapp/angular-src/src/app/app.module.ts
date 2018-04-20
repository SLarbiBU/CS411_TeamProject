import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventSearchComponent } from './Components/event-search/event-search.component';
import { SavedEventListComponent } from './Components/saved-event-list/saved-event-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './Components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    EventSearchComponent,
    SavedEventListComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
