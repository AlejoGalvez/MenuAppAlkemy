import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaRoutingModule } from './carta-routing.module';
import { PlatoComponent } from './components/plato/plato.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';




@NgModule({
  declarations: [
    PlatoComponent,
    HomeComponent,
    BuscarComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CartaRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class CartaModule { }
