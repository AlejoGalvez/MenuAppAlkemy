import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

interface Auth {
  email: string;
  password: string;
  token?: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://challenge-react.alkemy.org/'

  constructor( private http: HttpClient) { }

  logear( email: string, password: string ): Observable<Auth> {
    const datos = {
      email: email,
      password: password
    }
    return this.http.post<any>(this.url, datos);
  }

  verificaAutenticacion(): Observable<boolean> {
    if(!localStorage.getItem('token')) {
      return of(false);
    } else{ return of(true) }
     

    
  }

}
