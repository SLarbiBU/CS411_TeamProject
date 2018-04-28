import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../Services/events.service';
import {Event} from '../../Event';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-saved-events',
  templateUrl: './saved-events.component.html',
  styleUrls: ['./saved-events.component.css']
})
export class SavedEventsComponent implements OnInit {

  constructor(private eventsService: EventsService,
              private userService: UserService) { }

  username: string;
  events: Event[];

  ngOnInit() {
    this.username = this.userService.getUsername();
    this.eventsService.getSavedEvents(this.username).subscribe(events => {
      this.events = events;
    })
  }

  public deleteEvent(id, title: string){
    this.eventsService.deleteEvent(id).subscribe(event => {
      alert("You have successfully removed the event from your saved events list!");
      for (var i = 0; i < this.events.length; i++){
        if (!this.events[i].title.localeCompare(title)){
          this.events.splice(i,1);
        }
      }
    })
  }

  public getWeekday(date:any): string {
    var eventDate = new Date(date);
    var n = eventDate.getDay();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[n];
  }

  public getMonth(date:any): string {
    var eventDate = new Date(date);
    var n = eventDate.getMonth();
    var months = new Array(12);
    months[0] =  "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";

    return months[n];
  }

  public getDateNumber(date:any): number {
    var eventDate = new Date(date);
    var n = eventDate.getDate();
    return n;
  }

  public getYear(date:any): number {
    var eventDate = new Date(date);
    var n = eventDate.getFullYear();
    return n;
  }

  public getHours(date:any): number {
    var eventDate = new Date(date);
    var n = eventDate.getHours();
    if (n>12){
      return n%12;
    }
    else if (n==0){
      return 12;
    }
    else{
      return n;
    }
  }

  public getMinutes(date:any): string {
    var eventDate = new Date(date);
    var n = eventDate.getMinutes();
    if(n>9){
      return n.toString();
    }
    else{
      var time = "0" + n.toString();
      return time;
    }
  }

  public getDayTime(date:any): string {
    var eventDate = new Date(date);
    var n = eventDate.getHours();
    if(n>=12){
      return "PM";
    }
    else{
      return "AM";
    }
  }

}
