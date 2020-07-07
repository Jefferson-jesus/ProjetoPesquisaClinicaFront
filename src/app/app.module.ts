import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule
  ],
  providers: [ChildrenOutletContexts],
  bootstrap: [AppComponent]
})
export class AppModule { }
