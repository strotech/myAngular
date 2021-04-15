import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { SuperheroListComponent } from './superheroes/superhero-list/superhero-list.component';
import { SuperheroDetailComponent } from './superheroes/superhero-detail/superhero-detail.component';
import { SuperheroComponent } from './superheroes/superhero-list/superhero/superhero.component';
import { MixerListComponent } from './mixer-list/mixer-list.component';
import { MixerEditComponent } from './mixer-list/mixer-edit/mixer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuperheroesComponent,
    SuperheroListComponent,
    SuperheroDetailComponent,
    SuperheroComponent,
    MixerListComponent,
    MixerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
