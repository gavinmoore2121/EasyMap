import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Pins } from './about/Pins';


interface Data {
  id: number, 
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  quantity: number
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = "http://localhost:8080/api/getUserPins";
  constructor(private httpClient: HttpClient) { }
  
  fetchAll() : Observable<any> {

    return this.httpClient.get<any>(this.url, { responseType: "json"})
  
  }
}
// angular connects to server page which then forwards the request to servlet httprequest page which then forwards to database request etc? you want to eventually hit target 
// google firebase good logon api
