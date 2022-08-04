import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Platos } from '../../interfaces/plato.interface';
import { CartaService } from '../../services/carta.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino = new FormControl('', [Validators.minLength(2)]);

  busqueda!: Platos;
  numberVegan:number = 0;
  numberNoVegan: number = 0;
  constructor(private cartaService: CartaService) { }

  ngOnInit(): void {
  }


  buscar() {

    if(this.termino.invalid){
      console.log('invalido');
      return
    }

    this.cartaService.getPlatos(this.termino.value!)
      .subscribe( platos => {
        this.busqueda = platos;
        this.termino.reset();
      })
  }

  agregar( plato:any ){
    if(plato.vegan && this.numberVegan < 2){
      this.numberVegan ++;
      this.cartaService.agregarPlatos(plato);
    } else if(!plato.vegan && this.numberNoVegan < 2){
        this.numberNoVegan ++;
        this.cartaService.agregarPlatos(plato);
    } else {
     Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Maximo 2 platos de cada tipo',
      footer: 'Seleccione un plato de otra categoria'
    })
  }

  }

}
