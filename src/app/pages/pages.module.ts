import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

import { InglesComponent } from './ingles/ingles.component';
import { InglesPreguntasComponent } from './inglesPreguntas/inglesPreguntas.component';

import { InglesLaboratorioComponent } from './inglesLaboratorio/inglesLaboratorio.component';
import { InglesTallerComponent } from './inglesTaller/inglesTaller.component';

import { LecturaCriticaComponent } from './lecturaCritica/lecturaCritica.component';
import { LecturaCriticaPreguntasComponent } from './lecturaCriticaPreguntas/lecturaCriticaPreguntas.component';

import { LecturaCriticaLaboratorioComponent } from './lecturaCriticaLaboratorio/lecturaCriticaLaboratorio.component';
import { LecturaCriticaTallerComponent } from './lecturaCriticaTaller/lecturaCriticaTaller.component';

import { CienciasNaturalesComponent } from './cienciasNaturales/cienciasNaturales.component';
import { CienciasNaturalesPreguntasComponent } from './cienciasNaturalesPreguntas/cienciasNaturalesPreguntas.component';

import { CienciasNaturalesLaboratorioComponent } from './cienciasNaturalesLaboratorio/cienciasNaturalesLaboratorio.component';
import { CienciasNaturalesTallerComponent } from './cienciasNaturalesTaller/cienciasNaturalesTaller.component';

import { MatematicasComponent } from './matematicas/matematicas.component';
import { MatematicasPreguntasComponent } from './matematicasPreguntas/matematicasPreguntas.component';

import { MatematicasLaboratorioComponent } from './matematicasLaboratorio/matematicasLaboratorio.component';
import { MatematicasTallerComponent } from './matematicasTaller/matematicasTaller.component';

import { SocialesCiudadanasComponent } from './socialesCiudadanas/socialesCiudadanas.component';
import { SocialesCiudadanasPreguntasComponent } from './socialesCiudadanasPreguntas/socialesCiudadanasPreguntas.component';

import { SocialesCiudadanasLaboratorioComponent } from './socialesCiudadanasLaboratorio/socialesCiudadanasLaboratorio.component';
import { SocialesCiudadanasTallerComponent } from './socialesCiudadanasTaller/socialesCiudadanasTaller.component';

import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    InglesComponent,
    InglesPreguntasComponent,
    InglesLaboratorioComponent,
    InglesTallerComponent,
    LecturaCriticaComponent,
    LecturaCriticaPreguntasComponent,
    LecturaCriticaLaboratorioComponent,
    LecturaCriticaTallerComponent,
    CienciasNaturalesComponent,
    CienciasNaturalesPreguntasComponent,
    CienciasNaturalesLaboratorioComponent,
    CienciasNaturalesTallerComponent,
    MatematicasComponent,
    MatematicasPreguntasComponent,
    MatematicasLaboratorioComponent,
    MatematicasTallerComponent,
    SocialesCiudadanasComponent,
    SocialesCiudadanasPreguntasComponent,
    SocialesCiudadanasLaboratorioComponent,
    SocialesCiudadanasTallerComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    InglesComponent,
    InglesPreguntasComponent,
    InglesLaboratorioComponent,
    InglesTallerComponent,
    LecturaCriticaComponent,
    LecturaCriticaPreguntasComponent,
    LecturaCriticaLaboratorioComponent,
    LecturaCriticaTallerComponent,
    CienciasNaturalesComponent,
    CienciasNaturalesPreguntasComponent,
    CienciasNaturalesLaboratorioComponent,
    CienciasNaturalesTallerComponent,
    CienciasNaturalesLaboratorioComponent,
    CienciasNaturalesTallerComponent,
    MatematicasComponent,
    MatematicasPreguntasComponent,
    MatematicasLaboratorioComponent,
    MatematicasTallerComponent,
    SocialesCiudadanasComponent,
    SocialesCiudadanasPreguntasComponent,
    SocialesCiudadanasLaboratorioComponent,
    SocialesCiudadanasTallerComponent
  ]
})
export class PagesModule { }
