import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibService } from 'my-lib';
import {FormsModule}        from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { QuitComponent } from './pages/quit/quit.component';
import { SchoolDetailsComponent } from './pages/school-details/school-details.component';
import { EndComponent } from './pages/end/end.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailsComponent,
    JobDetailsComponent,
    QuitComponent,
    SchoolDetailsComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyLibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
