import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {WeatherService} from '../../Services/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  city: String = "Boston";
  weather: any;
  forecast: any;
  forecastArray: any[] = [];
  forecastIndex: number = 0;
  forecastLength: number = 0;
  mainWeather: string;
  description: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  windSpeed: number;

  eventDate: Date = new Date('April 25, 2018 09:00:00');
  venueLongitude: string = "4.91316489999997";
  venueLatitude: string = "52.352276";
  eventWeather: any = null;
  noEventWeather: number = 1;

  displayForecast: number= 0;
  displayCurrent: number = 0;
  displayEventWeather: number = 0;

  ngOnInit() {
    console.log(this.eventDate);
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes["city"]){
      
    }
  }

  public getEventWeather(){
    if (this.forecastLength == 0){
      this.weatherService.getWeatherForecast(this.venueLongitude, this.venueLatitude).subscribe(data => {
        this.forecast = data;
        this.forecastLength = this.forecast.list.length;
        for (var i = 0; i < this.forecast.list.length; i++){
          var increment = {
            mainWeather: this.forecast.list[i].weather[0].main,
            description: this.forecast.list[i].weather[0].description,
            temp: this.forecast.list[i].main.temp,
            minTemp: this.forecast.list[i].main.temp_min,
            maxTemp: this.forecast.list[i].main.temp_max,
            humidity: this.forecast.list[i].main.humidity,
            windSpeed: this.forecast.list[i].wind.speed,
            time: new Date(this.forecast.list[i].dt_txt)
          };
  
          this.forecastArray.push(increment);
        }
        this.forecastIndex = 0;
        var roundedDate: Date = new Date();
        roundedDate.setFullYear(this.eventDate.getFullYear());
        roundedDate.setMonth(this.eventDate.getMonth());
        roundedDate.setDate(this.eventDate.getDate());
        roundedDate.setHours(this.eventDate.getHours() - (this.eventDate.getHours() % 3));
        for (var j = 0; j < this.forecastArray.length; j++){
          if (this.forecastArray[j].time.getDate() == roundedDate.getDate() && this.forecastArray[j].time.getHours() == roundedDate.getHours()){
            this.eventWeather = this.forecastArray[j];
            this.noEventWeather = 0;
          }
        }
        this.displayCurrent = 0;
        this.displayForecast = 0;
        this.displayEventWeather = 1;
      })
    }
    else{
      var roundedDate: Date = new Date();
      roundedDate.setFullYear(this.eventDate.getFullYear());
      roundedDate.setMonth(this.eventDate.getMonth());
      roundedDate.setDate(this.eventDate.getDate());
      roundedDate.setHours(this.eventDate.getHours() - (this.eventDate.getHours() % 3));
      for (var j = 0; j < this.forecastArray.length; j++){
        if (this.forecastArray[j].time.getDate() == roundedDate.getDate() && this.forecastArray[j].time.getHours() == roundedDate.getHours()){
          this.eventWeather = this.forecastArray[j];
          this.noEventWeather = 0;
        }
      }
      this.displayCurrent = 0;
      this.displayForecast = 0;
      this.displayEventWeather = 1;
    }
  }

  public getWeather(){
    if (this.weather != null){
      this.displayForecast = 0;
      this.forecastIndex = 0;
      this.displayCurrent = 1;
      this.displayEventWeather = 0;
    }
    else{
      this.weatherService.getCurrentWeather(this.venueLongitude, this.venueLatitude).subscribe(data => {
        this.weather = data;
        this.mainWeather = this.weather.weather[0].main;
        this.description = this.weather.weather[0].description;
        this.temp = this.weather.main.temp;
        this.minTemp = this.weather.main.temp_min;
        this.maxTemp = this.weather.main.temp_max;
        this.humidity = this.weather.main.humidity;
        this.windSpeed = this.weather.wind.speed;
        this.displayForecast = 0;
        this.forecastIndex = 0;
        this.displayCurrent = 1;
        this.displayEventWeather = 0;
      });
    }
  }

  public incrementTime(){
    if (this.forecastIndex < this.forecastLength){
      this.forecastIndex++;
    }
  }

  public decrementTime(){
    if (this.forecastIndex > 0){
      this.forecastIndex--;
    }
  }

  public getWeatherForecast(){
    if (this.forecastArray.length != 0){
      this.displayForecast = 1;
      this.displayCurrent = 0;
      this.displayEventWeather = 0;
    }
    else{
      this.weatherService.getWeatherForecast(this.venueLongitude, this.venueLatitude).subscribe(data => {
        this.forecast = data;
        this.forecastLength = this.forecast.list.length;
        for (var i = 0; i < this.forecast.list.length; i++){
          var increment = {
            mainWeather: this.forecast.list[i].weather[0].main,
            description: this.forecast.list[i].weather[0].description,
            temp: this.forecast.list[i].main.temp,
            minTemp: this.forecast.list[i].main.temp_min,
            maxTemp: this.forecast.list[i].main.temp_max,
            humidity: this.forecast.list[i].main.humidity,
            windSpeed: this.forecast.list[i].wind.speed,
            time: new Date(this.forecast.list[i].dt_txt)
          };
  
          this.forecastArray.push(increment);
        }
        this.forecastIndex = 0;
        this.displayForecast = 1;
        this.displayCurrent = 0;
        this.displayEventWeather = 0;
      })
    }
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

/*

<div class="row justify-content-center">
                    <div class="col-md-2">
                        <strong>Main Weather:</strong> <p>{{mainWeather}}</p>
                        <strong>Description:</strong> <p>{{description}}</p>
                        <strong>Temperature:</strong> <p>{{temp}} *F</p>
                        <strong>Min Temp:</strong> <p>{{minTemp}} *F</p>
                        <strong>Max Temp:</strong> <p>{{maxTemp}} *F</p>
                        <strong>Humidity %:</strong> <p>{{humidity}}</p>
                        <strong>Wind Speed:</strong> <p>{{windSpeed}} MPH</p>
                    </div>
                  </div>

                */