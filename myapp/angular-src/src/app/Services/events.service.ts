import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class EventsService {

  constructor(private http: HttpClient) { }


  getPastEvents(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json'
      })
    };

    return this.http.get("http://localhost:3000/events/getPastEventsByUsername/" + username);
  }

  getSavedEvents(username){
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'Content-Type':  'application/json'
      })
    };

    return this.http.get("http://localhost:3000/events/getSavedEventsByUsername/" + username);
  }


}
