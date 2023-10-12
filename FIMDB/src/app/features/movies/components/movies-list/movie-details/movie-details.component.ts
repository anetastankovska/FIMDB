import { Component, OnInit } from '@angular/core';
import { Movie } from "../../../interfaces/movie.interface";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../../services/movies.service";

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
    private readonly activatedRoute: ActivatedRoute,
    private readonly moviesService: MoviesService
  ) {
  }

  ngOnInit(): void {
    // Subscribe to route params to get the movieId
    this.activatedRoute.params.subscribe((params) => {
      this.movieId = params['movieId'];
      // Fetch movie data based on the movieId
      this.fetchMovieDetails(this.movieId);
    });

    this.showFilledStars();
    this.showHalfStar();
  }

  fetchMovieDetails(movieId: string): void {
    this.moviesService.getMovieById(movieId).subscribe({
      next: (movieData) => {
        this.movie = movieData;
        console.log(movieData?.rating.averageValue)
        this.showFilledStars();
        this.showHalfStar();
      },
      error: (error) => {
        console.error('Error fetching movie details:', error);
      }
    });
  }
  

  // Calculate the number of filled stars (including half stars) based on the averageValue
  showFilledStars(): number {
    if (this.movie?.rating?.averageValue !== undefined) {
      this.fullStars = Math.floor(this.movie.rating.averageValue);
      return this.fullStars;
    }
    return 0;
  }

// Calculate whether to show a half star
  showHalfStar(): boolean {
    if (this.movie?.rating?.averageValue !== undefined) {
      const decimalValue: number = this.movie.rating.averageValue % 1;
      return decimalValue >= 0.5 ? (this.halfStar = true) : (this.halfStar = false);
    }
    return false;
  }

  // Create an array with 10 elements (representing the maximum number of stars)
  starSequence(n: number): Array<number> {
    return Array(n);
  }

  submitVote = (movieId: string, vote: string): void => {
    const voteObj = {ratingValue : parseFloat(vote)}
    console.log(voteObj);
    this.moviesService.rateMovie(movieId, voteObj).subscribe(movie => {
      console.log(movie); 
      this.movie = movie; 
      this.showFilledStars(); 
      this.showHalfStar()});
  }
}
