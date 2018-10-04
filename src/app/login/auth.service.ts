import {EventEmitter, Injectable} from '@angular/core';
import {Usuario} from "./usuario";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarmenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@gmail.com' && usuario.senha === '123'){
      this.usuarioAutenticado = true;

      this.mostrarmenuEmitter.emit(true);
      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;
      this.mostrarmenuEmitter.emit(false);

    }
  }


  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;

  }


}
