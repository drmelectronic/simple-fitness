import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../shared/modules/material/material.module';
import {ControlRoutingModule} from './control.routing';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';

@NgModule({
  declarations: [ListComponent, CreateComponent],
  imports: [
    CommonModule,
    ControlRoutingModule,
    MaterialModule
  ]
})
export class ControlModule { }
