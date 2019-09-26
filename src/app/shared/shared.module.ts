import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MaterialModule} from './modules/material/material.module';
import {ModulesModule} from '../modules/modules.module';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  exports: [
    MaterialModule,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ModulesModule
  ]
})
export class SharedModule { }
