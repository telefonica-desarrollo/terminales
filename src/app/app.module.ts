import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular Fire
import { environment } from "../environments/environment"
import { AngularFireModule } from '@angular/fire/compat';

//Componentes
import { PrepagoComponent } from './promociones/prepago/prepago.component';
import { PospagoComponent } from './promociones/pospago/pospago.component';
import { PosPreComponent } from './promociones/pos-pre/pos-pre.component';

//Angular Material
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input"
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ReducirNombrePipe } from './pipes/reducir-nombre.pipe';
import { ComisionPipe } from './pipes/comision.pipe';
import { RenovacionesComponent } from './promociones/renovaciones/renovaciones.component';
import { AparecerNombrePipe } from './pipes/aparecer-nombre.pipe';

const AngularMaterialModule: any = [
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatTableModule
]

@NgModule({
  declarations: [
    AppComponent,
    PrepagoComponent,
    PospagoComponent,
    PosPreComponent,
    ReducirNombrePipe,
    ComisionPipe,
    RenovacionesComponent,
    AparecerNombrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
    
    //Angular Material
    BrowserAnimationsModule,
    AngularMaterialModule,

    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
