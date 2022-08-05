import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../login/service/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate, CanLoad {

  constructor( private router: Router, private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  | Promise<boolean>  | boolean  {
      return this.loginService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if(!estaAutenticado) {
            this.router.navigateByUrl('/login');
          }
        } )
      )
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.loginService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if(!estaAutenticado) {
            this.router.navigateByUrl('/login');
          }
        } )
      )
  }
}
