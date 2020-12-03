import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {GlosRoutesRoutingModule} from './Routing/routing';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { TrendsComponent } from './trends/trends.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    TrendsComponent,
    ProfileComponent,
    SettingsComponent,
    DashboardComponent,
    TopheaderComponent,
    MapsComponent
  ],
  imports: [
    GlosRoutesRoutingModule,
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
