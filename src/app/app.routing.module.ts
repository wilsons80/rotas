import {NgModule} from "@angular/core";


import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guardas-rotas/auth.guard";
import {CursosGuard} from "./guardas-rotas/cursos.guard";
import {AlunosGuard} from "./guardas-rotas/alunos.guard";
import {PaginaNaoEncontradaComponent} from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

//Carregamento lazyLoading
//1-passo: tirar toda declaração de import de CursoModule na aplicação
//2-passo: apontar o path completo do module
//3-limpar o path principal que está no routing

const appRoutes: Routes = [
  { path: 'cursos',
    loadChildren:'./cursos/cursos.module#CursosModule', //aplicando lazyLoading
    canActivate: [AuthGuard],
    canActivateChild:[CursosGuard],
    canLoad: [AuthGuard]
   },

  {  path: 'alunos'
     ,loadChildren:'./alunos/alunos.module#AlunosModule'  //aplicando lazyLoading
     ,canActivate: [AuthGuard]
     ,canActivateChild:[AlunosGuard]
     ,canLoad: [AuthGuard]
  },

  {path: 'login', component: LoginComponent},

  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo:'/home', pathMatch:'full'},

  {path: '**', component: PaginaNaoEncontradaComponent} //Envia para uma página personalizada "Não encontrada"
  //{path: '**', component: PaginaNaoEncontradaComponent,canActivate: [AuthGuard]} //Envia para a página de login

  //{path: 'cursos', component: CursosComponent},
  //{path: 'curso/:id', component: CursoDetalheComponent},
  //{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
];


@NgModule({
  imports:[
           RouterModule.forRoot(appRoutes, {useHash:true})
          ],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
