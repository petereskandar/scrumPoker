import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ConnectionStatusComponent } from './connection-status/connection-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionStatusComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
