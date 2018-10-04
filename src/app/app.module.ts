import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule
} from "@angular/material";

import { FormMaterialTesteComponent } from './form-material-teste/form-material-teste.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from "./app.routing.module";

import "materialize-css";
import {AuthService} from "./login/auth.service";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./guardas-rotas/auth.guard";
import {CursosGuard} from "./guardas-rotas/cursos.guard";
import {AlunosGuard} from "./guardas-rotas/alunos.guard";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

//import {AlunosGuard} from "./guardas-rotas/alunos.guard";
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from "./cursos/cursos.service";
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
//import {routing} from "./app.routing";
//import {CursosModule} from "./cursos/cursos.module";
//import {AlunosModule} from "./alunos/alunos.module";
//import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormMaterialTesteComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent
    //CursosComponent,
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule, //Usado apenas no módulo principal, os módulos de funcionalidade devem usar o CommonModule
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
    FormsModule
    //routing
    //CursosModule,
    //AlunosModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard
    ,AlunosGuard
    //CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
