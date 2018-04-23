import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../Services/events.service';
import {Event} from '../../Event';

@Component({
  selector: 'app-past-event',
  templateUrl: './past-event.component.html',
  styleUrls: ['./past-event.component.css']
})
export class PastEventComponent implements OnInit {

  constructor(private eventsService: EventsService) { }

  username: string = "mwcote97";
  events2: any;
  events: Event[];

  ngOnInit() {
    this.eventsService.getPastEvents(this.username).subscribe(events => {
      this.events2 = events;
      this.events = this.events2;
    })
  }

}
