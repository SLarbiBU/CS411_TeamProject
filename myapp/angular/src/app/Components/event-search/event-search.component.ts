import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventDataService} from '../../Services/event-data.service';
import {EventsService} from "../../Services/events.service";
import {UserService} from  "../../Services/user.service";
import {Event} from "../../Event";

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {

  /*event : Event = 
  {
    venue: "GoDataDriven",
    address: "Wibautstraat 202, 1091 GS Amsterdam",
    longitude: "4.91316489999997",
    latitude: "52.352276",
    image_url: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F42898678%2F147680010052%2F1%2Foriginal.jpg?auto=compress&s=9050981af7ebf12573f66cb28888b655",
    category: "Science & Technology",
    username: "mwcote97",
    title: "Training Signal Processing for Data Science - Dutch Data Science Week 2018",
    description: "In the rise of Big Data, not only the amount of data but also its diversity is ever increasing. Beyond 'traditional' data consisting of samples of a fixed number of interpretable variables, there is data such as free text, time series (financial transactions, power usage), audio (speech), images and video. These so called signals typically need to be processed such that meaningful variables can be extracted and structured prior to further usage in data analyses and machine learning applications.\n\nTopics\nThis workshop is focused on making powerful data representations from signals for machine learning applications. In two consecutive parts, we will focus on feature engineering and feature learning in which we touch upon the following subjects, for all of which Python code is provided:\n\nfeature extraction using convolution and Fourier analysis\nbuilding bag-of-visual-word models from images\nfeature learning for dimensionality reduction\nend-to-end training of deep convolutional networks\napplying the feature -engineering and -learning techniques for time series, speech, and image classification\n\n\nFor who is this workshop?\nThe workshop is suitable for data scientists with knowledge and/or experience in applying machine learning with python (e.g. numpy, scipy, scikit-learn, pandas).\nDates\nThis workshop is scheduled for: Monday, May 28th from 9:00 - 17:00\nThis workshop is part of the Dutch Data Science Week.\n",
    url: "https://www.eventbrite.nl/e/tickets-training-signal-processing-for-data-science-dutch-data-science-week-2018-44682775384?aff=ebapi",
    startTime: new Date("2018-05-28T13:00:00.000Z"),
    endTime: new Date("2018-05-28T22:00:00.000Z"),
    saved: true
  };*/

  location: string = "";
  kindEvent: string = "";
  isFree: boolean = false;
  isPaid: boolean= false;
  isToday: boolean= false;
  isTomorrow: boolean= false;
  isWeekend: boolean= false;
  isThisWeek: boolean= false;
  isNextWeek: boolean= false;

  eventData:any;
  eventArray: Event[] = [];

  username: string;
  
  
  constructor(private router: Router,
              private eventDataService: EventDataService,
              private eventService: EventsService,
              private userService: UserService) {}

  ngOnInit() {
    this.username = this.userService.getUsername();
  }

  public getEvents(){
    this.eventService.getSearchEvents(this.location, this.kindEvent,this.isFree, this.isPaid, this.isToday, this.isTomorrow, this.isWeekend, this.isThisWeek, this.isNextWeek).subscribe(eventData => {
      this.eventData = eventData;
      //console.log(this.eventData);
      for (var i = 0; i < this.eventData.events.length; i++){
        //console.log(i);
        //console.log(this.eventData.events[i]);
        var eventInstance: Event = {
          username: this.username, 
          title: this.eventData.events[i].name.text,
          description: this.eventData.events[i].description.text,
          url: this.eventData.events[i].description.text,
          startTime: new Date(this.eventData.events[i].start.local),
          endTime: new Date(this.eventData.events[i].end.local),
          saved: false,
          venue: this.eventData.events[i].venue.name,
          address: this.eventData.events[i].venue.address.localized_multi_line_address_display[0],
          longitude: this.eventData.events[i].venue.longitude,
          latitude: this.eventData.events[i].venue.latitude,
          image_url: (this.eventData.events[i].logo == null ? "" : this.eventData.events[i].logo.ur),
          category: (this.eventData.events[i].category == null ? "" : this.eventData.events[i].category.name)
        };
        //console.log(eventInstance);
        this.eventArray.push(eventInstance);
      }
      //console.log(this.eventArray);
    })
  }

  //following tutorial for routing: https://angular.io/tutorial/toh-pt5
  public getEventDetails(event: Event) {
    this.eventDataService.changeEvent(event);
    this.router.navigate(['resultEvent']);
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
