//following this tutorial for passing data: https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Event} from '../Event';

@Injectable()
export class EventDataService {

  private eventSource = new BehaviorSubject<Event>(null);
  private eventArraySource = new BehaviorSubject<Event[]>([]);
  private eventLocationSource =new BehaviorSubject<string>("");
  private eventTermSource = new BehaviorSubject<string>("");
  currentEvent = this.eventSource.asObservable();
  currentEventArray = this.eventArraySource.asObservable();
  currentLocation = this.eventLocationSource.asObservable();
  currentTerm = this.eventTermSource.asObservable();

  constructor() { }

  changeEvent(event: Event) {
    this.eventSource.next(event)
  }

  changeEventArray(eventArray: Event[]){
    this.eventArraySource.next(eventArray);
  }

  changeLocation(location: string) {
    this.eventLocationSource.next(location)
  }

  changeTerm(term: string) {
    this.eventTermSource.next(term)
  }

}
