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
    'http://tds.glos.us/thredds/dodsC/buoys_standard/45013/2020/45013_20200527.nc';
    return this.httpClient.get<any>(buoyUrl);
  };
}
