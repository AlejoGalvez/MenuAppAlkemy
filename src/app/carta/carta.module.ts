import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaRoutingModule } from './carta-routing.module';
import { PlatoComponent } from './components/plato/plato.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PlatoComponent,
    HomeComponent,
    BuscarComponent,
    DetallesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CartaRoutingModule,
    ReactiveFormsModule
  ]
})
export class CartaModule { }
