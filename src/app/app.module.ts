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
import { CharactersComponent } from './components/characters/characters.component.html/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousesComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    HouseService, 
    CharacterService,
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
