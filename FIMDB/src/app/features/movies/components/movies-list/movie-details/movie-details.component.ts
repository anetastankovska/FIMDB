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
    this.moviesService.getMovieById('64e489b11540095f145c6a07').subscribe({
      next: (movieData) => {
        this.movie = movieData;
        console.log(movieData?.rating.averageValue)
        this.showFilledStars();
        this.showHalfStar();
      },
      error: (error) => {
        console.error('Error fetching movie details:', error);
        // Handle the error as needed, e.g., display an error message.
      }
    });
  }
  

  // Calculate the number of filled stars (including half stars) based on the averageValue
  showFilledStars(): number {
    if (this.movie?.rating?.averageValue !== undefined) {
      this.fullStars = Math.floor(this.movie.rating.averageValue);
      return this.fullStars;
    }
    return 0; // or another default value if movie or its properties are null or undefined
  }

// Calculate whether to show a half star
  showHalfStar(): boolean {
    if (this.movie?.rating?.averageValue !== undefined) {
      const decimalValue: number = this.movie.rating.averageValue % 1;
      return decimalValue >= 0.5 ? (this.halfStar = true) : (this.halfStar = false);
    }
    return false; // or another default value if movie or its properties are null or undefined
  }

  // Create an array with 10 elements (representing the maximum number of stars)
  starSequence(n: number): Array<number> {
    return Array(n);
  }

  submitVote = (vote: string): void => {
    console.log(vote);
  }
}
