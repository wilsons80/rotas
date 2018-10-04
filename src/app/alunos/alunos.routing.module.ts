import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AlunosComponent} from "./alunos.component";
import {AlunoDetalheComponent} from "./aluno-detalhe/aluno-detalhe.component";
import {AlunoFormComponent} from "./aluno-form/aluno-form.component";
import {AlunosGuard} from "../guardas-rotas/alunos.guard";
import {AlunosDeactivateGuard} from "../guardas-rotas/alunos-deactivate.guard";
import {AlunoDetalheResolver} from "./guards/aluno-detalhe.resolver";

const alunosRoutes = [
  {path:''
    ,component: AlunosComponent
    //,canActivatedChild: [AlunosGuard] //Outra forma de ativar as guardas filhas, porém dessa forma será ativada apenas quando acessar uma rota filha de aluno,
    ,children :[
                  {path:'novo', component: AlunoFormComponent},
                  {path:':id', component: AlunoDetalheComponent ,
                      resolve:{ aluno : AlunoDetalheResolver }
                  },
                  {path:':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }
               ]
  },
];

@NgModule({
  imports:[RouterModule.forChild(alunosRoutes)],
  exports:[RouterModule],
  declarations:[],
  providers:[]
})
export class AlunosRoutingModule {


}
