import { Component, OnInit } from '@angular/core';
import {WeatherComponent} from '../weather/weather.component';
import {Event} from '../../Event';

@Component({
  selector: 'app-result-event',
  templateUrl: './result-event.component.html',
  styleUrls: ['./result-event.component.css']
})
export class ResultEventComponent implements OnInit {

  constructor() { }

  event = 
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
  };

  ngOnInit() {
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
