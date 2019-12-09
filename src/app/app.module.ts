import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './homepage/homepage.component';

import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movies/movies.component';
import { AppComponent } from './app.component';
import { TvComponent } from './tvshows/tv.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'movies', component: MovieComponent},
      {path: 'tvShows', component: TvComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }