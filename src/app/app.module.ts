import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePe from '@angular/common/locales/es-PE';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuth} from '@angular/fire/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import {PagesModule} from './pages/pages.module';
import {ModulesModule} from './modules/modules.module';
import {SharedModule} from './shared/shared.module';
import {MaterialModule} from './shared/modules/material/material.module';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';


registerLocaleData(localePe, 'pe');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModulesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    PagesModule,
    SharedModule,
    MaterialModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
