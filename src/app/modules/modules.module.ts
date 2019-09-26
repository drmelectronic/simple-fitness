import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlModule } from './control/control.module';
import {UserModule} from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlModule,
    UserModule
  ],
  exports: [
    ControlModule,
    UserModule
  ]
})
export class ModulesModule { }
