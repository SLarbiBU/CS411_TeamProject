import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../Services/events.service';
import {Event} from '../../Event';

@Component({
  selector: 'app-past-event',
  templateUrl: './past-event.component.html',
  styleUrls: ['./past-event.component.css']
})
export class PastEventComponent implements OnInit {

  //using services to abstract http call - as seen in https://angular.io/tutorial/toh-pt4
  constructor(private eventsService: EventsService) { }

  username: string = "mwcote97";
  events: Event[];

  ngOnInit() {
    this.eventsService.getPastEvents(this.username).subscribe(events => {
      this.events = events;
    })
  }

}
