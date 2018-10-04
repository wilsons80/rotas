import {Component, OnDestroy, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos:any[];
  pagina: number;

  inscricao: Subscription;

  constructor(private cursosService:CursosService,
              private rotaAtiva:ActivatedRoute,
              private router:Router) {

    //Como obter os parametros de uma URL
    this.inscricao = this.rotaAtiva.queryParams.subscribe((parametro: any) =>{
      this.pagina = parametro['pagina'];
    });

  }

  proximaPagina(){
    this.pagina++;
    this.router.navigate(['/cursos'], {queryParams: {'pagina': this.pagina}});
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
