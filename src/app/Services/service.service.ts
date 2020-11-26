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

  //Practice searching buoy to return info
  getBuoyData = (searchTerm: string): any => {
    let searchBuoy = new HttpParams().set('query', searchTerm);
    return this.httpClient.get(
    `http://data.glos.us/erddap/tabledap/45013.json?&time%3E=2020-10-21T00%3A00%3A00Z`,
    { params: searchBuoy }
  };
}
