import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import {MaterialModule} from '../../shared/modules/material/material.module';



@NgModule({
  declarations: [ProfileComponent],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class UserModule { }
