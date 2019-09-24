import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PagesRoutingModule} from './pages.routing';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from '../shared/modules/material/material.module';
import {MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [LoginComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    MatButtonModule
  ]
})
export class PagesModule { }
