import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GlosRoutesRoutingModule} from './Routing/routing';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactComponent } from './contact/contact.component';
import { TrendsComponent } from './trends/trends.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactComponent,
    TrendsComponent,
    ProfileComponent,
    SettingsComponent,
    DashboardComponent,
    CreateProfileComponent,
    LoginComponent
  ],
  imports: [
    GlosRoutesRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
