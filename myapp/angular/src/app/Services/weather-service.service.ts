import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }


  getCurrentWeather(city){
    return this.http.get("http://localhost:3000/weather/current/" + city);
  }

  getWeatherForecast(city){
    return this.http.get("http://localhost:3000/weather/forecast/" + city);
  }

}
