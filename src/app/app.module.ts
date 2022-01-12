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
import { InfoTiendaComponent } from './promociones/shared/info-tienda/info-tienda.component';
import { CargarPromModule } from './cargar-prom/cargar-prom.module';
import { PagePrincipalComComponent } from './carga-com/page-principal-com/page-principal-com.component';
import { DocAltasComponent } from './carga-com/doc-altas/doc-altas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagePrincipalComComponent,
    DocAltasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
    AngMaterialModule,
    PromocionesModule,
    CargarPromModule,

    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
