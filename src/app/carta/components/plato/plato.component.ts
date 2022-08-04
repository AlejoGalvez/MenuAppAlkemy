import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platos } from '../../interfaces/plato.interface';
import { CartaService } from '../../services/carta.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styles: [
  ]
})
export class PlatoComponent implements OnInit {

  @Input() plato!:any;
  @Input() i!:number;

  @Output() boton: EventEmitter<Platos> = new EventEmitter();

  buscar:boolean = false;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.url
      .subscribe( url => {
        if( url.length > 0 ){
          this.buscar = true;
      }})
  }

  event(){

    this.boton.emit(this.plato);

  }

}
