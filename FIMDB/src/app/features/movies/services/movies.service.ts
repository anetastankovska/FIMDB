import { Injectable } from '@angular/core';
import { MoviesApiService } from './movies-api.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LoggerService } from 'src/app/core/services/logger.service';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private readonly moviesApiService: MoviesApiService,
    private readonly loggerService: LoggerService
    ) { }

  getAllMovies(): Observable<Movie[] | null> {
    return this.moviesApiService.getMovies()
      .pipe(
        catchError(error => this.handleError(error, []))
      );
  }

  getMovieById(movieId: string): Observable<Movie | null> {
    return this.moviesApiService.getMovieById(movieId)
      .pipe(
        catchError(error => this.handleError(error, null))
      );
  }

  rateMovie(movieId: string, rating: number): Observable<Movie | null> {
    const ratingObject = { ratingValue: rating };
    return this.moviesApiService.rateMovie(movieId, ratingObject)
      .pipe(
        catchError(error => this.handleError(error, null))
      );
  }

  private handleError(error: any, returnValue: any): Observable<any> {
    this.loggerService.error(error);
    return of(returnValue);
  }
}

