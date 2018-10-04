import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CursosComponent} from "./cursos.component";
import {CursoDetalheComponent} from "./curso-detalhe/curso-detalhe.component";
import {CursoNaoEncontradoComponent} from "./curso-nao-encontrado/curso-nao-encontrado.component";


const cursosRoutes: Routes = [
  //O path ficou vazio devido o carregamento lazyLoading feito em AppRoutingModule
  {path: '', component: CursosComponent},
  {path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  {path: ':id', component: CursoDetalheComponent},
];

@NgModule({
  imports:[RouterModule.forChild(cursosRoutes)],
  exports:[RouterModule],
  declarations:[],
  providers:[]
})
export class CursosRoutingModule {

}
