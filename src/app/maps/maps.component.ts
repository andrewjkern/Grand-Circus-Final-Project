import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { BoundElementProperty } from '@angular/compiler';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow;
  @Output () newItemEvent = new EventEmitter<any>();
  title = 'Great Lakes Observing System Buoys';
  center= {lat: 44.182205,lng: -84.506836}
  zoom = 6.2;
  // temperature= this.buoy.temperature;

buoys: any[]= []
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getBuoys().subscribe(res => {this.buoys=res
    
  this.buoys.forEach(buoy => {buoy.position={lat:buoy.lat,lng:buoy.lon}})
  console.log(this.buoys)})
  }

  openInfoWindow(marker: MapMarker, i: number) {
  
    this.infoWindow.open(marker);
    this.newItemEvent.emit(this.buoys[i])
  }
}
