import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AlunosService} from "../alunos.service";
import {IformCandeactivate} from "../../guardas-rotas/iform-candeactivate";

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IformCandeactivate {

  private aluno:any = {};
  private inscricao: Subscription;

  private formMudou: boolean = false;

  constructor(
    private rotaAtiva: ActivatedRoute,
    private alunoService: AlunosService
  ) {

  }

  ngOnInit() {
    this.inscricao = this.rotaAtiva.params.subscribe((param:any) => {
      let id = param['id'];
      this.aluno = this.alunoService.getAluno(id);

      if(this.aluno == null){
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  nomeMudou(){
    this.formMudou = true;
    console.log("Nome mudou...");
  }

  podeDesativar(){
    if(this.formMudou){
        return confirm("Tem certeza que deeja sair dessa página");
    }
    return true;
  }

}
