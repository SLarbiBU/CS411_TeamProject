//following angular.io tutorial for http requests: https://angular.io/tutorial/toh-pt6

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Event} from '../Event';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EventsService {

  constructor(private http: HttpClient) { }


  getPastEvents(username): Observable<Event[]>{
    return this.http.get<Event[]>("http://localhost:3000/events/getPastEventsByUsername/" + username);
  }

  getSavedEvents(username): Observable<Event[]>{
    return this.http.get<Event[]>("http://localhost:3000/events/getSavedEventsByUsername/" + username);
  }

  deleteEvent(id){
    return this.http.delete("http://localhost:3000/events/deleteEvent/" + id);
  }

}
