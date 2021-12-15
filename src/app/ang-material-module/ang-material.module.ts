import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input"
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';

const AngularMaterialModule: any = [
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatTableModule,
  MatExpansionModule,
  MatSliderModule
]

@NgModule({
  declarations: [],
  exports: [
    AngularMaterialModule
  ],
  imports: [
    CommonModule,
  ]
})
export class AngMaterialModule { }
