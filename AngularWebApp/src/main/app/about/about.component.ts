import { Component, OnInit } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { _countGroupLabelsBeforeOption } from '@angular/material/core';

import { InitalPosService } from '../inital-pos.service';
import { MarkerDataService } from '../marker-data.service';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Pins } from './Pins';


interface MarkerData{
  // user: string, 
  title: string,
  // lat: Number,
  // lng: Number,
  position: google.maps.LatLngLiteral,

}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // pins$: Observable<Pins[]>
 
  markers: MarkerData[] =[];
  // markers1: any[] = [];
  markers1: any[] = [{ 
    position: { lat: 33, lng: -84, },
    title: "test1"
  },
  {
    position: { lat: 35, lng: - 85},
    title: "test2"
  }
];
  pins: any;
  // coordinates: PositionData = { lat:number, lng: number}
  constructor(private initalPosService : InitalPosService, private markerDataService : MarkerDataService,
    private apiService : ApiService) {
      // this.initalPosService.getPosition().subscribe(pos=> {
      // })
      // this.pins = this.apiService.fetchAll().subscribe(data => {
      //   this.pins = data;
      // })
      // this.markerDataService.getMarkerData().subscribe(data => { 
      //   this.markers = data;
      //   console.log(data)
      // })
  }
user: String = "epenn920@gmail.com";
title: String = "Google Maps Page";
center: google.maps.LatLngLiteral = {
  lat: 37.09024, 
  lng: -95.712891
}

options: google.maps.MapOptions = {
  mapTypeId: 'roadmap',
  zoomControl: true,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  maxZoom: 20,
  minZoom: 3,
  
}

// markers: Array<Marker> = [];

ngOnInit(): void {
  // console.log(this.center);
  
  this.apiService.fetchAll().subscribe(
    data => console.log(data),
    error => console.log('error')
  )
  // let map = this.getMap();
  // this.getInitialMarkers(map);
  // google.maps.event.addListener(map, "click", (event) => {
  //   this.addMarkers(event.latLng, map)
  // });
  
  // this.addMarkers(bangalore, map);
  //   google.maps.event.addListener(map, "dblclick", (event) => {
    //     this.addMarkers(event.latLng, map);
    //   });
    
    // }
  }
getMap = () => {
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 4,
    center: this.center,
  }
  )
  const currentLocationButton = document.createElement("button");
  currentLocationButton.setAttribute("id","#locationButton")
  currentLocationButton.textContent = "Pan to current Location";
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(currentLocationButton);
  currentLocationButton.addEventListener("click", () => {
    console.log('clicked')
    map.setZoom(11);
    this.getPos()
    map.setCenter(this.center);
  })
  return map;
}

getPos = () => { 
  this.initalPosService.getPosition().subscribe(
    (pos: GeolocationPosition) => {
      this.center = {
        lat: +(pos.coords.latitude),
        lng: +(pos.coords.longitude)
      }
      console.log(this.center);
    }
    )
  }
  
  getInitialMarkers(map: google.maps.Map) {
    // for ( let i = 0; i < this.pins$.length; i++) {
    //   const marker = new google.maps.Marker({
    //     position: this.markers1[i].position,
    //     map: map,
    //     title: this.markers1[i].description,
    //   })
    // }
    console.log(this.pins);
  }

  getInfoWindowContent() {
    const contentString = prompt("Enter description") as string;
    console.log(contentString)
    return contentString
    // const getInput = document.createElement('label');
    // getInput.innerHTML = "Enter description for pin";
    // getInput.setAttribute('id', '#info');
    // const sendInput = document.createElement('button');
    // sendInput.innerHTML = 'Submit'
    // sendInput.addEventListener('click', () => {
    //   return getInput.innerHTML;
    // })
    
  }

  addMarkers(location: google.maps.LatLngLiteral, map: google.maps.Map): void {
    const label = `${this.user}`
    let labelIndex: number = 0;
    const infoWindow = new google.maps.InfoWindow({
    })
    infoWindow.setContent(this.getInfoWindowContent());
    const description = infoWindow.getContent() as string;
    const marker = new google.maps.Marker({
      
      position: location,
      label: label[labelIndex++ % label.length],
      map: map,
      title: description,
      // p
      
    })
    if(this.markers1.length < 7) {
      this.markers1.push(marker);
    }
    else {
      this.markers1.shift();
      this.markers1.push(marker);
    }
    console.log(location);
    console.log(label)
    console.log(description)
    console.log(this.markers1.length)
    // this.getMap();
}
    // marker: google.maps.MapsEventListener = {
    //   remove:
    // }
  
  ngOnChanges() {
  }
  
  
  
}
// getPos = async() => { 
//   await this.initalPosService.getPosition().subscribe(
//     (pos: GeolocationPosition) => {
//       this.center = {
//         lat: +(pos.coords.latitude),
//         lng: +(pos.coords.longitude)
//       }
//       console.log(this.center);
//     }
//   )
// }
// getMap = () => {
// const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
//   zoom: 12,
//   center: this.center,
// }
// );
// return map;
// }

// var i=0
// function addListing(location) {
//   var addMarker;
//   var iMax=1;

//   if(i<=iMax) {
//       addMarker = new google.maps.Marker({
//       draggable:false,
//       position: location,
//       map: map
//   });

//   google.maps.event.addListener(addMarker, 'dblclick', function() {
//     addMarker.setMap(null);
//     i=1;
//   });

//   i++;

//   } else {
//       console.log('you can only post' , i-1, 'markers');
//       }
// } 
