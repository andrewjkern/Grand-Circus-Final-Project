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

  //Get buoy to return data
  getBuoyData = (): any => {
    let buoyUrl =
    'http://data.glos.us/erddap/tabledap/45013.json?&time%3E=2020-10-21T00%3A00%3A00Z';
    return this.httpClient.get<any>(buoyUrl);
  };
}
