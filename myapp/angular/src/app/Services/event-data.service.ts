//following this tutorial for passing data: https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Event} from '../Event';

@Injectable()
export class EventDataService {

  private eventSource = new BehaviorSubject<Event>(null);
  currentEvent = this.eventSource.asObservable();

  constructor() { }

  changeEvent(event: Event) {
    this.eventSource.next(event)
  }

}
