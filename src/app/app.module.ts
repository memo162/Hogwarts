import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HousesComponent } from './components/houses/houses.component';
import { HouseService } from './services/house.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterService } from './services/character.service';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './components/characters/characters.component';
import { DatePipe } from '@angular/common';
import { CardComponent } from './components/common/card/card.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentService } from './services/student.service';
import { TeacherService } from './services/teacher.service';
import { TeachersComponent } from './components/teachers/teachers.component';
import { StudentFormComponent } from './components/students/studentForm/studentForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeButtonComponent } from './components/common/homeButton/homeButton.component';
import { LoadingComponent } from './components/common/loading/loading.component';
import { LoadingService } from './services/loading.service';
import { FooterComponent } from './components/common/footer/footer.compoent';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousesComponent,
    CharactersComponent,
    CardComponent,
    StudentsComponent,
    TeachersComponent,
    StudentFormComponent,
    HomeButtonComponent,
    LoadingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    HouseService, 
    CharacterService,
    StudentService,
    TeacherService,
    LoadingService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
