import {Injectable} from "@angular/core";
import {CanActivateChild} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "../../../node_modules/@angular/router/src/router_state";
import {Observable} from "rxjs";

@Injectable()
export class CursosGuard implements CanActivateChild{

  constructor(){

  }


  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

    console.log("Guarda de rota filha");
    return true;
  }

}
