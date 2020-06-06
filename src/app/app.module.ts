import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { DBServices } from './db.services';
import { ItshareApiService } from './services/itshare-api.service';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    CourseComponent, // Register The Class in Module
  ],
  imports: [
    BrowserModule,
   ],
  providers: [
    DBServices,
    ItshareApiService
  ], // register the provide of DB Services
  bootstrap: [AppComponent]
}) 
export class AppModule { }
 