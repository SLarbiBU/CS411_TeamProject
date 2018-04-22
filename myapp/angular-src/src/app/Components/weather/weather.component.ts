import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {WeatherService} from '../../Services/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  city: String;
  weather: any;
  forecast: any;
  mainWeather: string;
  description: string;
  temp: number;
  minTemp: number;
  maxTemp: number;
  humidity: number;
  windSpeed: number;


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges){
    if(changes["city"]){
      
    }
  }

  public getWeather(){
    this.weatherService.getCurrentWeather(this.city).subscribe(data => {
      this.weather = data;
      this.mainWeather = this.weather.weather[0].main;
      this.description = this.weather.weather[0].description;
      this.temp = this.weather.main.temp;
      this.minTemp = this.weather.main.temp_min;
      this.maxTemp = this.weather.main.temp_max;
      this.humidity = this.weather.main.humidity;
      this.windSpeed = this.weather.wind.speed;
  });
  }
}

