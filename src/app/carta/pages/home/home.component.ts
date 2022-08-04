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
  
  
  

  constructor( private cartaService:CartaService) { }

  ngOnInit(): void {
    console.log(this.platosGuardados);
    
    console.log(this.platosGuardados.length > 0);
  }

  

}
