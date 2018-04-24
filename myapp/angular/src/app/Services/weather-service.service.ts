import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }


  getCurrentWeather(longitude, latitude){
    return this.http.get("http://localhost:3000/weather/current/" + longitude + "/" + latitude);
  }

  getWeatherForecast(longitude, latitude){
    return this.http.get("http://localhost:3000/weather/forecast/" + longitude + "/" + latitude);
  }

}
