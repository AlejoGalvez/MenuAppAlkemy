import { Component, OnInit } from '@angular/core';
import { Platos } from '../../interfaces/plato.interface';
import { CartaService } from '../../services/carta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  

  get platosGuardados(): any[] {
    return this.cartaService.platosGuardados;
  }
  
  get totalPlatos(): number {
    let total:number = 0;
    for(let precio of this.platosGuardados){
      total += precio.pricePerServing
    }
    return total
  }
  
  get promedioTiempo():number {
    const sum = this.platosGuardados.reduce((sum, plato) => {
      return sum + plato.readyInMinutes;
    }, 0);
    let platos = this.platosGuardados.length
    return (platos > 0 ? sum / platos : platos);
  }

  get promedioScore():number {
    const sum = this.platosGuardados.reduce((sum, plato) => {
      return sum + plato.healthScore;
    }, 0);
    let platos = this.platosGuardados.length
    return (platos > 0 ? sum / platos : platos);
  }

  constructor( private cartaService:CartaService) { }

  ngOnInit(): void {
  }

  borrar( plato:Platos ){
    this.cartaService.borrarPlatos(plato);
  }


  

}
