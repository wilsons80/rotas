import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, Router} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "../../../node_modules/@angular/router/src/router_state";
import {Observable} from "rxjs";
import {AuthService} from "../login/auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) : Observable<boolean> | boolean {

    return this.verificarAcesso();
  }


  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }


  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.verificarAcesso();
  }


}
