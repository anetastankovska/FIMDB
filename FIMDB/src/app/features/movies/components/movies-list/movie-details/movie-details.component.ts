import { Component, OnInit } from '@angular/core';
import { Movie, UserRating } from '../../../interfaces/movie.interface';
import { MoviesService } from '../../../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie | null = {} as Movie;

  movieId: string;

  fullStars: number;
  halfStar: boolean;

  constructor(
    private readonly moviesService: MoviesService,
    private readonly activatedRoute: ActivatedRoute
    ){}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        this.movieId = params['movieId'];
        this.fetcMovieDetails(this.movieId);
      })
      
    }

    fetcMovieDetails = (movieId: string): void => {
      this.moviesService.getMovieById(movieId).subscribe({
        next: (movieData) => {
          this.movie = movieData;
          console.log(movieData);
          this.showFilledStars();
          this.showHalfStar();
        },
        error: (error) => {
          console.error('Error fetching movie details', error);
        }
      })
    }

    starSequence = (n: number): number[] => {
      return Array(n);
    }

    showFilledStars = (): number  => {
      if (this.movie?.rating?.averageValue !== undefined) {
        this.fullStars = Math.floor(this.movie.rating.averageValue);
        return this.fullStars;
      }
      return 0;
    }

    showHalfStar = (): boolean => {
      if (this.movie?.rating?.averageValue !== undefined) {
        const decimalValue: number = this.movie.rating.averageValue % 1;
        return decimalValue >= 0.5 ? (this.halfStar = true) : (this.halfStar = false)
      }
      return false
    }

    submitVote = (movieId: string, vote: string) => {
      const voteObj: UserRating = { ratingValue: parseFloat(vote)}
      console.log(voteObj);
      this.moviesService.rateMovie(movieId, voteObj).subscribe(movie => {
        this.movie = movie;
        this.showFilledStars();
        this.showHalfStar();
      })
    }

}
