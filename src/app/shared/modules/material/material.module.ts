import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatTableModule,
  MatNativeDateModule,
  MatInputModule, MatGridListModule, MatButtonModule, MatButtonToggleModule, MatListModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  exports: [
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
