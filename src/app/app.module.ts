import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { DBServices } from './db.services';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent, // Register The Class in Module
  ],
  imports: [
    BrowserModule,
   ],
  providers: [DBServices], // register the provide of DB Services
  bootstrap: [AppComponent]
}) 
export class AppModule { }
 