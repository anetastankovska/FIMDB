import { Injectable } from '@angular/core';
import { MoviesApiService } from './movies-api.service';
import { catchError, finalize } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoggerService } from 'src/app/core/services/logger.service';
import { Movie, UserRating } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  isFetching = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly moviesApiService: MoviesApiService,
    private readonly loggerService: LoggerService
  ) {}

  getAllMovies(): Observable<Movie[] | []> {
    this.isFetching.next(true);

    return this.moviesApiService.getMovies().pipe(
      catchError((error) => this.handleError(error, [])),
      finalize(() => this.isFetching.next(false))
    );
  }

  getMovieById(movieId: string): Observable<Movie | null> {
    this.isFetching.next(true);
    return this.moviesApiService.getMovieById(movieId).pipe(
      catchError((error) => this.handleError(error, null)),
      finalize(() => this.isFetching.next(false))
    );
  }

  rateMovie = (movieId: string, rating: UserRating): Observable<Movie | null> => {
    return this.moviesApiService.rateMovie(movieId, rating).pipe(
      catchError((error) => this.handleError(error, null))
    )
  }

  private handleError(error: any, returnValue: any): Observable<any> {
    this.loggerService.error(error);
    return of(returnValue);
  }
}
