import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import { BoundElementProperty } from '@angular/compiler';
import { element } from 'protractor';
import { DashboardComponent } from '../dashboard/dashboard.component';
// import MarkerClusterer from '@googlemaps/markerclustererplus';


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
  longName = ""
  iD = ""
  
buoys: any[]= []



  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getBuoys().subscribe(res => {this.buoys=res
    
  this.buoys.forEach(buoy => {buoy.position={lat:buoy.lat,lng:buoy.lon}})
  console.log(this.buoys)})
  }
  // this.longName= this.buoy.contact.longName;

  openInfoWindow(marker: MapMarker, i: number) {
  console.log(marker)
  this.longName=this.buoys[i].longName
  this.iD=this.buoys[i].id
    this.infoWindow.open(marker);
    this.newItemEvent.emit(this.buoys[i])
  }
  // markerCluster = new MarkerClusterer(GoogleMap, MapMarker,{
  //   imagePath:
  //   "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  // })
}
