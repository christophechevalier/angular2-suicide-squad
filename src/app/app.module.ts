import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent, SettingsDialog}         from './app.component';
import {DashboardComponent}   from './dashboard/dashboard.component';
import {HeroesComponent}      from './heroes/heroes.component';
import {HeroDetailComponent}  from './hero-detail/hero-detail.component';
import {HeroService}          from './hero.service';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {Routing}              from './app.routing';

// Import All Material Modules
import {MaterialModule} from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    Routing,
    [
      MaterialModule.forRoot()
    ],
  ],
  declarations: [
    AppComponent,
    SettingsDialog,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],
  entryComponents: [
    AppComponent,
    SettingsDialog,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}