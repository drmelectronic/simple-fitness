import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateComponent} from './pages/create/create.component';
import {ListComponent} from './pages/list/list.component';

export const CC_CONTROL_ROUTES: Routes = [
  { path: 'control/new', component: CreateComponent },
  { path: 'control/list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(CC_CONTROL_ROUTES)],
  exports: [RouterModule]
})
export class ControlRoutingModule { }
