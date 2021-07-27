import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitalPosService {

  coordinates: any;
  constructor() { }

  public getPosition(): Observable<GeolocationPosition> {
    return new Observable(
      (observer) => { 
        navigator.geolocation.watchPosition((pos : GeolocationPosition) => {
          observer.next(pos);
        }),
        () => {
          console.log('Not available');
        },
        {
          enableHighAccuracy: true
        };
      });
  }
}
