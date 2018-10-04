import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CursosService} from "../cursos.service";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  codigoCurso: number;
  inscricao: Subscription;

  curso:any;



  constructor(private paramRotas: ActivatedRoute,
              private router: Router,
              private cursoService: CursosService) {

    //Problema: São obtidos apenas uma vez quando a classe é criada.
    //Obtenho os parametros de uma rota
    //this.codigoCurso = this.paramRotas.snapshot.params['id'];

  }

  ngOnInit() {

    //Sempre que o valor da parametro for alterado, então esse valor será enviado para o atributo
    this.inscricao = this.paramRotas.params.subscribe(
      (valor:any) => {
        this.codigoCurso = valor['id'];

        this.curso = this.cursoService.getCurso(this.codigoCurso);

        if(this.curso == null){
          this.router.navigate(['cursos/naoEncontrado']);
        }
      }
    )
  }


  //Destroy o componente que tem os valores de parametros sempre que a classe for destruída.
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
