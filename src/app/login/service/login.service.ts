import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url: string = 'http://challenge-react.alkemy.org/'

  constructor( private http: HttpClient) { }

  logear( email: string, password: string ): Observable<any> {
    const datos = {
      email: email,
      password: password
    }
    return this.http.post<any>(this.url, datos);
  }

}
