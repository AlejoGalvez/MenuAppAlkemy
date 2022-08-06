import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GuardsGuard } from './guards/guards.guard';
import { ErrorComponent } from './login/error/error.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: 'carta',
    loadChildren: () => import('./carta/carta.module').then(m => m.CartaModule),
    canLoad: [ GuardsGuard],
    canActivate: [ GuardsGuard ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
