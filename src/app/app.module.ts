import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Pipe1Pipe } from './common-services/pipe1.pipe';
import { Dir1Directive } from './common-services/dir1.directive';

@NgModule({
  declarations: [
    AppComponent,
    Pipe1Pipe,
    Dir1Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
