import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { Routing }              from './app.routing';

import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdGridListModule } from '@angular2-material/grid-list/grid-list';
import { MdListModule } from '@angular2-material/list/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSliderModule } from '@angular2-material/slider';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdInputModule } from '@angular2-material/input';
/*import { MdTooltipModule } from '@angular2-material/tooltip';*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    Routing,
    [
      MdButtonModule.forRoot(),
      MdButtonToggleModule.forRoot(),
      MdGridListModule,
      MdListModule,
      MdMenuModule,
      MdRadioModule,
      MdSliderModule,
      MdCardModule,
      MdToolbarModule,
      MdInputModule,
/*      MdTooltipModule.forRoot()*/
    ],
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}