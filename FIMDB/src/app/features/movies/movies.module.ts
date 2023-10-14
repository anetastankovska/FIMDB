import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieCardComponent } from './components/movies-list/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movies-list/movie-details/movie-details.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { TextShortenPipe } from './pipes/text-shorten.pipe';

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
  ]
})
export class MoviesModule { }

