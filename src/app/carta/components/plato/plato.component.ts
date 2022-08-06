import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platos } from '../../interfaces/plato.interface';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';



@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styles: [
  ]
})
export class PlatoComponent implements OnInit {

  @Input() plato!:any;
  

  @Output() boton: EventEmitter<Platos> = new EventEmitter();

  buscar:boolean = false;

  placeholder:string = 'https://grupoact.com.ar/wp-content/uploads/2020/04/placeholder.png';

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
    let dialogRef = this.dialog.open(DetallesPlato, {
      data: this.plato,
    });
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'detalles-plato.component.html',
  styles: []
})
export class DetallesPlato{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DetallesPlato>) {}
  
  get vegan():string {
    return this.data.vegan? 'si' : 'no';
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
