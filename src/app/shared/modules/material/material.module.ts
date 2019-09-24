import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
