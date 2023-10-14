import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movies-list/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';


const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: ':movieId', component: MovieDetailsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
