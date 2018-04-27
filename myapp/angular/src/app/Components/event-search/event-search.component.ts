import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventDataService} from '../../Services/event-data.service';
import {Event} from "../../Event";

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {

  event : Event = 
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

  constructor(private router: Router,
              private eventDataService: EventDataService) {}

  ngOnInit() {
  }

  //following tutorial for routing: https://angular.io/tutorial/toh-pt5
  public goSearch() {
    this.eventDataService.changeEvent(this.event);
    this.router.navigate(['resultEvent']);
  }

}
