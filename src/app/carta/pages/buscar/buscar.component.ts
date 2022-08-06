import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Platos } from '../../interfaces/plato.interface';
import { CartaService } from '../../services/carta.service';
import { Subject, debounceTime } from 'rxjs';
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
  

  get numberVegan() :number  {
     return this.cartaService.numberVegan
  } 
  get numberNoVegan() :number  {
    return this.cartaService.numberNoVegan
 } 

  debouncer: Subject<string> = new Subject();


  constructor(private cartaService: CartaService) { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( () => {
      this.buscar()
    });
  }

  teclaPresionada(){
    this.debouncer.next(this.termino.value!);
  }


  buscar() {

    if(this.termino.invalid || this.termino.value == ''){
      return
    }

    this.cartaService.getPlatos(this.termino.value!)
      .subscribe( platos => {
        this.busqueda = platos;
      })
  }

  agregar( plato:any ){
    if(plato.vegan && this.numberVegan < 2){
      this.cartaService.sumar('vegan');
      this.cartaService.agregarPlatos(plato);
    } else if(!plato.vegan && this.numberNoVegan < 2){
      this.cartaService.sumar('noVegan');
        this.cartaService.agregarPlatos(plato);
    } else {
     Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pueden agregar mas de dos platos '+(plato.vegan?'veganos':'no veganos'), 
      footer: 'Seleccione un plato de otra categoria'
    })
  }

  }

}
