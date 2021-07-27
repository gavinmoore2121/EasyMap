import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {UserComponent} from "./components/user/user.component";
import {MapComponent} from "./components/map/map.component";

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from './api.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { InitalPosService } from './inital-pos.service';
import { MarkerDataService } from './marker-data.service';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    GoogleMapsModule,
    // FormsModule,
    ReactiveFormsModule,

  ],
  providers: [ ApiService, InitalPosService, MarkerDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
