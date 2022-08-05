import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platos } from '../../interfaces/plato.interface';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';



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

  constructor( private activatedRoute: ActivatedRoute,
               public dialog: MatDialog) { }

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

  openDialog() {
    this.dialog.open(DetallesPlato, {
      data: this.plato,
    });
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'detalles-plato.component.html',
})
export class DetallesPlato{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  
}
