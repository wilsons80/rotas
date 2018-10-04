import {NgModule} from "@angular/core";
import {CursosComponent} from "./cursos.component";
import {CursoDetalheComponent} from "./curso-detalhe/curso-detalhe.component";
import {CursoNaoEncontradoComponent} from "./curso-nao-encontrado/curso-nao-encontrado.component";
import {CursosService} from "./cursos.service";
import {CommonModule} from "@angular/common";
import {CursosRoutingModule} from "./cursos.routing.module";


@NgModule({
  imports:[
    //os módulos de funcionalidade devem usar o CommonModule
    CommonModule,
    CursosRoutingModule
  ],
  exports:[],
  declarations:[
                CursosComponent,
                CursoDetalheComponent,
                CursoNaoEncontradoComponent
               ],
  providers:[CursosService]

})
export class CursosModule{

}
