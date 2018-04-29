//following angular.io tutorial for http requests: https://angular.io/tutorial/toh-pt6

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  deleteEvent(id):Observable<Event>{
    return this.http.delete<Event>("http://localhost:3000/events/deleteEvent/" + id);
  }

  getSearchEvents(location, kindEvent,isFree, Paid, isToday, isTomorrow, isWeekend, isThisWeek, isNextWeek){
    var url = "https://www.eventbriteapi.com/v3/events/search/?token=";
    var token = "NFYOWMHHAT2MAUY2DZVC";
    url = url + token;
    url = url + "&q=" + kindEvent;
    url = url + "&start_date.keyword=" + ((isToday) ? "today" : (isTomorrow) ? "tomorrow" : (isWeekend) ? "this_weekend" : (isThisWeek) ? "this_week" : "next_week");
    url = url + "&location.address=" + location;
    url = url + "&price=" + ((isFree) ? "free" : "paid");
    url = url + "&expand=venue,category";
    return this.http.get(url);
  }

  saveEvent(event: Event): Observable<Event>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<Event>("http://localhost:3000/events/saveEvent/", event, httpOptions);
  }

}
