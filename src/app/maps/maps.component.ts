import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  title = 'Great Lakes Observing System Buoys';
  center= {lat: 44.182205,lng: -84.506836}
  zoom = 6;

buoys: any[]= []
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getBuoys().subscribe(res => {this.buoys=res
    
  this.buoys.forEach(buoy => {buoy.position={lat:buoy.lat,lng:buoy.lon}})
  console.log(this.buoys)})
  }
  
}
