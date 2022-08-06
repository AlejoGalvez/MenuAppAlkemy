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
  private _numberVegan:number = 0;
  private _numberNoVegan: number = 0;

  get platosGuardados():any[] {
    return [ ...this._platosGuardados ]
  }

  get numberVegan():number {
    return this._numberVegan
  }

  get numberNoVegan():number {
    return  this._numberNoVegan 
  }

  constructor(private http: HttpClient) { }

  getPlatos( termino: string ): Observable<Platos> {
    return this.http.get<Platos>(`${this._baseUrl}/?query=${termino}&apiKey=${this._apiKey}&addRecipeInformation=true`)
  }

  agregarPlatos( plato: any ) {
    this._platosGuardados.push(plato)
  }

  sumar( termino:string ) {
    if(termino == 'vegan'){
      this._numberVegan ++;
    } else this._numberNoVegan ++;
  }

  borrarPlatos( plato: any ) {
    
    (plato.vegan == true) ? this._numberVegan -- : this._numberNoVegan -- ;

    const platoABorrar = (element:Platos) => element == plato;

    this._platosGuardados.splice(this._platosGuardados.findIndex(platoABorrar), 1);


  }

}
