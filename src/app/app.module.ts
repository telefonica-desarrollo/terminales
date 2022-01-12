import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

//Modulos
import { AngMaterialModule } from "./ang-material-module/ang-material.module"
import { PromocionesModule } from './promociones/promociones.module';
import { PipesModule } from './pipes/pipes.module';

//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './promociones/shared/navbar/navbar.component';

//Angular Fire
import { environment } from "../environments/environment"
import { AngularFireModule } from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { CargarPromModule } from './cargar-prom/cargar-prom.module';
import { CargaComModule } from './carga-com/carga-com.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    AppRoutingModule,
    AngMaterialModule,
    PromocionesModule,
    CargarPromModule,
    CargaComModule,

    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
