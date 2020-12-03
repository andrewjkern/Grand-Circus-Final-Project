import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  public $getGLOSAPI = new Subject<any>();

  currentWeather = (): any => {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/forecast?zip=48350&appid=392f6048b43be686e36404f5b294ec59` );
  };

  practiceGlos = (): any => {
    return this.httpClient.get(`http://data.glos.us/erddap/tabledap/45013.json?&time%3E=2020-10-21T00%3A00%3A00Z&time%3C=2020-10-28T21%3A30%3A00Z` );
  };
}



// `pro.openweathermap.org/data/2.5/forecast/hourly?zip=${this.userInput}&appid=17c2dcbf565359f7101c4ad856a515d4`
// return this.http.get(`http://openweathermap.org/data/2.5/forecast/hourly?lat=`+lat`&lon=`+lon`&appid=392f6048b43be686e36404f5b294ec59`);