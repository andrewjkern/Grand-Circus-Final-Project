import { Component, OnInit } from '@angular/core';
import {GoogleMap, MapInfoWindow, MapMarker} from '@angular/google-maps';
import{ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-contactMap',
  templateUrl: './contactMap.component.html',
  styleUrls: ['./contactMap.component.css']
})
export class ContactMapComponent implements OnInit {
  center = {lat:42.216830,lng: -83.736300 }
 

  position = {
    lat: 42.216830,
    lng: -83.736300,
  }
  constructor() { }

  ngOnInit(): void {
  }

}
