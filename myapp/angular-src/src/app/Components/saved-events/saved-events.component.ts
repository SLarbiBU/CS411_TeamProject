import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../Services/events.service';
import {Event} from '../../Event';

@Component({
  selector: 'app-saved-events',
  templateUrl: './saved-events.component.html',
  styleUrls: ['./saved-events.component.css']
})
export class SavedEventsComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  username: string = "mwcote97";
  events2: any;
  events: Event[];

  ngOnInit() {
    this.eventsService.getSavedEvents(this.username).subscribe(events => {
      this.events2 = events;
      this.events = this.events2;
    })
  }

}