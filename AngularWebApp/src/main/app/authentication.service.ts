import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { environment } from '../../environments/environment';
import { User } from './user';
// import { prototype } from 'events';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
    
  ) {
    
    this.userSubject = new BehaviorSubject<User>(JSON.parse(<string>localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }
  // headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost:8080");
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      "Access-Control-Allow-Origin": "http://localhost:8080",
      'Accept': 'text/html',
      'Content-Type': 'text/plain; charset=utf-8'
    }),
    responseType: 'text' as 'json'
  };


  public get userValue(): User {
    return this.userSubject.value;
  }

  login(usernameInput: string, passwordInput: string) 
  {
    const loginObj = {
      username: usernameInput,
      password: passwordInput
   };
    return this.http.post<any>("http://localhost:8080/api/validateLogin", JSON.stringify(loginObj), this.httpOptions )
      .pipe(map(user => {
        // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
        user.authdata = window.btoa(usernameInput + ':' + passwordInput);
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
   // @ts-ignore
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}