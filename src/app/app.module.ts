import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { Todo } from './todo';
import { UmeshTestComponent } from './umesh-test/umesh-test.component';
@NgModule({
  declarations: [
    AppComponent,
    // Todo,
    UmeshTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,UmeshTestComponent]
})
export class AppModule { }
export class todo{}
export class umesh{}
