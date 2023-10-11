import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieCardComponent } from './components/movies-list/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movies-list/movie-details/movie-details.component';
import { MaterialModule } from 'src/app/material.module';
import { TextShortenPipe } from './pipes/text-shorten.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    TextShortenPipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule,
    CoreModule,
    HttpClientModule
  ],
  exports: [
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsComponent
  ]
})
export class MoviesModule { }
