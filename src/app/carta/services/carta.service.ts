import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Platos } from '../interfaces/plato.interface';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  private _baseUrl: string = environment.baseUrl;
  private _apiKey: string = environment.apiKey;
  private _platosGuardados: any[] = [];

  get platosGuardados():any[] {
    return [ ...this._platosGuardados ]
  }

  constructor(private http: HttpClient) { }

  getPlatos( termino: string ): Observable<Platos> {
    return this.http.get<Platos>(`${this._baseUrl}/?query=${termino}&apiKey=${this._apiKey}&addRecipeInformation=true`)
  }

  agregarPlatos( plato: any ) {
    this._platosGuardados.push(plato)
  }

  borrarPlatos( plato: Platos ) {
    
    const platoABorrar = (element:Platos) => element == plato;

    // console.log(this._platosGuardados.findIndex(platoABorrar));

    this._platosGuardados.splice(this._platosGuardados.findIndex(platoABorrar), 1);
  }

}
