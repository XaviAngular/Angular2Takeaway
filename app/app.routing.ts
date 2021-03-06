import {ModuleWithProviders} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";

import { InicioComponent } from './inicio/inicio.component';
import { InfoComponent } from './info/info.component';
import { FotosComponent } from './fotos/fotos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LacuevaComponent } from './lacueva/lacueva.component';
import { EditPlatoComponent } from './lacueva/edit-plato/edit-plato.component';

const appRoutes: Routes=[
{
	path:'',
	redirectTo:'/',
	pathMatch:'full'
},
{path: '', component:InicioComponent},
{path:'info', component:InfoComponent},
{path:'fotos', component:FotosComponent},
{path:'contacto', component:ContactoComponent},
{path:'lacueva', component:LacuevaComponent},
{path:'edit-plato/:id', component:EditPlatoComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);