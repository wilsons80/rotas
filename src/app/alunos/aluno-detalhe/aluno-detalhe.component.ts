import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {AlunosService} from "../alunos.service";
import {AlunoDetalheResolver} from "../guards/aluno-detalhe.resolver";
import {Aluno} from "../aluno";

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno:Aluno;
  inscricao: Subscription;

  constructor(private rotaAtiva: ActivatedRoute,
              private router: Router,
              private alunoService: AlunosService) {

  }

  ngOnInit() {
    /*
    this.inscricao = this.rotaAtiva.params.subscribe((param:any) => {
      let id = param['id'];
      this.aluno = this.alunoService.getAluno(id);
    });
    */

    this.inscricao = this.rotaAtiva.data.subscribe(
      (info) => {
          this.aluno = info.aluno; //info.aluno -> corresponde ao nome da variável definida em alunosRoutes => resolve:{ aluno : AlunoDetalheResolver }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar' ])

  }

}
