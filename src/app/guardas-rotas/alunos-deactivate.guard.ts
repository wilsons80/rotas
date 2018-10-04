import {Injectable} from "@angular/core";
import {CanDeactivate} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "../../../node_modules/@angular/router/src/router_state";
import {Observable} from "rxjs";
import {IformCandeactivate} from "./iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements  CanDeactivate<IformCandeactivate> {

  constructor(){
  }

  canDeactivate(component: IformCandeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

    console.log("Guarda de desativação");
    return component.podeDesativar();
  }

}
