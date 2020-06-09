import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { DBServices } from './db.services';
import { ItshareApiService } from './services/itshare-api.service';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // To Run Two Way Binding
import { FavoriteComponent } from './favorite/favorite.component';
import { SummeryPipe } from './summery.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    CourseComponent,
    FavoriteComponent,
    SummeryPipe,
    PanelComponent,
    InputFormatDirective,
    LoginComponent, // Register The Class in Module
  ],
  imports: [
    BrowserModule,
    FormsModule, // To Run Two Way Binding
    ReactiveFormsModule,
  ],
  providers: [DBServices, ItshareApiService], // register the provide of DB Services
  bootstrap: [AppComponent],
})
export class AppModule {}
