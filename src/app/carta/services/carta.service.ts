import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  private baseUrl: string = environment.baseUrl;
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getPlatos( termino: string ): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/?query=${termino}&${this.apiKey}`)
  }

}
