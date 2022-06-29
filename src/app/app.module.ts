
import { RouterModule } from '@angular/router';
import { DefaultModule } from './layouts/default/default.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-modules/home-page/home-page.component';
import { DetailsComponent } from './home-modules/details/details.component';
import { GetToClassComponent } from './home-modules/get-to-class/get-to-class.component';
import { PaymentsComponent } from './modules/payments/payments.component';
import { ForwardEmailsComponent } from './modules/forward-emails/forward-emails.component';
import { UploadFileComponent } from './modules/upload-file/upload-file.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {ButtonModule} from 'primeng/button';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsComponent,
    GetToClassComponent,
    PaymentsComponent,
    ForwardEmailsComponent,
    UploadFileComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    RouterModule,
    MatCardModule,
    MatIconModule, 
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
