import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PrepagoComponent} from "./promociones/prepago/prepago.component"
import {PospagoComponent} from "./promociones/pospago/pospago.component"
import { RenovacionesComponent } from './promociones/renovaciones/renovaciones.component';
import { HomeComponent } from './promociones/home/home.component';
import { LoginComponent } from './login/login.component';
import { PagePrincipalComponent } from './cargar-prom/page-principal/page-principal.component';


const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent, children: [
    {path: "prepago", component: PrepagoComponent},
    {path: "pospago", component: PospagoComponent},
    {path: "renovaciones", component: RenovacionesComponent},
  ]},
  {path: "cargar/terminales", component: PagePrincipalComponent},
  
  {path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
