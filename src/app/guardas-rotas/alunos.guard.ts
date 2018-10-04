import {Injectable} from "@angular/core";
import {CanActivateChild} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "../../../node_modules/@angular/router/src/router_state";
import {Observable} from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild{

  constructor(){

  }


  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    //console.log('Rota filha', route);
    //console.log('Rota filha',state);

    if(state.url.includes('editar')){
      //alert('Usuário sem acesso.');
      //return false;
    }
    return true;
  }


}
