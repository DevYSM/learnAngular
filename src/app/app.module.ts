import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { DBServices } from './db.services';
import { ItshareApiService } from './services/itshare-api.service';
import { CourseComponent } from './course/course.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { SummeryPipe } from './summery.pipe'; // To Run Two Way Binding

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    CourseComponent,
    FavoriteComponent,
    SummeryPipe, // Register The Class in Module
  ],
  imports: [
    BrowserModule,
    FormsModule // To Run Two Way Binding
   ],
  providers: [
    DBServices,
    ItshareApiService
  ], // register the provide of DB Services
  bootstrap: [AppComponent]
}) 
export class AppModule { }
 