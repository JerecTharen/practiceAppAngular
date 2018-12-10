import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {TestComponent} from './testComponent/test.component';
import { VeryCoolComponent } from './very-cool/very-cool.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule, MatToolbarModule,MatCardModule} from "@angular/material";
// import {MatCardModule} from "@angular/material/typings/card";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    VeryCoolComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
