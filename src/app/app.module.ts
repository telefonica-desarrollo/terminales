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

//Angular Material
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input"
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

const AngularMaterialModule: any = [
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    
    SwiperModule,
    //Angular Material
    BrowserAnimationsModule,
    AngularMaterialModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
