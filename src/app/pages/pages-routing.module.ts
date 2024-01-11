import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
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

const routes:Routes=[
  {path:'dashboard', component:PagesComponent,
  children:[
    {path:'', component:DashboardComponent}, 
    {path:'usuarios', component:LecturaCriticaComponent},
    {path:'productos', component:CienciasNaturalesComponent}
  
  ]
 
},
{path:'lecturaCritica', component:PagesComponent,
children:[
  {path:'', component:LecturaCriticaComponent,}, 
 ]
},
{path:'lecturaCriticaPreguntas', component:PagesComponent,
children:[
  {path:'', component:LecturaCriticaPreguntasComponent,}, 
 ]
},

{path:'lecturaCriticaLaboratorio', component:PagesComponent,
children:[
  {path:'', component:LecturaCriticaLaboratorioComponent,}, 
 ]
},
{path:'lecturaCriticaTaller', component:PagesComponent,
children:[
  {path:'', component:LecturaCriticaTallerComponent,}, 
 ]
},

{path:'ingles', component:PagesComponent,
children:[
  {path:'', component:InglesComponent}, 
 ]
},
{path:'inglesPreguntas', component:PagesComponent,
children:[
  {path:'', component:InglesPreguntasComponent}, 
 ]
},
{path:'inglesLaboratorio', component:PagesComponent,
children:[
  {path:'', component:InglesLaboratorioComponent}, 
 ]
},
{path:'inglesTaller', component:PagesComponent,
children:[
  {path:'', component:InglesTallerComponent}, 
 ]
},

{path:'cienciasNaturales', component:PagesComponent,
children:[
  {path:'', component:CienciasNaturalesComponent},
 
 ]
},
{path:'cienciasNaturalesPreguntas', component:PagesComponent,
children:[
  {path:'', component:CienciasNaturalesPreguntasComponent},
 
 ]
},
{path:'cienciasNaturalesLaboratorio', component:PagesComponent,
children:[
  {path:'', component:CienciasNaturalesLaboratorioComponent},
 
 ]
},
{path:'cienciasNaturalesTaller', component:PagesComponent,
children:[
  {path:'', component:CienciasNaturalesTallerComponent},
 
 ]
},


{path:'matematicas', component:PagesComponent,
children:[
  {path:'', component:MatematicasComponent},

 
 ]
},
{path:'matematicasPreguntas', component:PagesComponent,
children:[
  {path:'', component:MatematicasPreguntasComponent},

 
 ]
},
{path:'matematicasLaboratorio', component:PagesComponent,
children:[
  {path:'', component:MatematicasLaboratorioComponent},

 
 ]
},
{path:'matematicasTaller', component:PagesComponent,
children:[
  {path:'', component:MatematicasTallerComponent},

 
 ]
},

{path:'socialesCiudadanas', component:PagesComponent,
children:[
  {path:'', component:SocialesCiudadanasComponent},

 
 ]
},
{path:'socialesCiudadanasPreguntas', component:PagesComponent,
children:[
  {path:'', component:SocialesCiudadanasPreguntasComponent},

 
 ]
},
{path:'socialesCiudadanasLaboratorio', component:PagesComponent,
children:[
  {path:'', component:SocialesCiudadanasLaboratorioComponent},

 
 ]
},
{path:'socialesCiudadanasTaller', component:PagesComponent,
children:[
  {path:'', component:SocialesCiudadanasTallerComponent},

 
 ]
},

]


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
