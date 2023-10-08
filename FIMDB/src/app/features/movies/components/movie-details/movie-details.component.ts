import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movie = {
    id: "64e642d893169b2d5c0d6e28",
    name: "John Wick - Chapter 4",
    genre: "Action",
    director: "Chad Stahelski",
    year: 2023,
    description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    rating: {
      votes: [
        8,
        9
      ],
      averageValue: 8.5
    }
  }

  fullStars: number;
  halfStar: boolean;

  ngOnInit(): void {
    this.showFilledStars();
    this.showHalfStar();
  }

  // Calculate the number of filled stars (including half stars) based on the averageValue
  showFilledStars(): number {
    this.fullStars = Math.floor(this.movie.rating.averageValue);
    console.log(this.fullStars);
    return this.fullStars
  }

  // Calculate whether to show a half star
  showHalfStar(): boolean {
    const decimalValue = this.movie.rating.averageValue % 1;
    console.log(decimalValue);
    return decimalValue >= 0.5 ? this.halfStar = true : this.halfStar = false;
  }

  // Create an array with 10 elements (representing the maximum number of stars)
  starSequence(n: number): Array<number> { 
    return Array(n); 
  }

  submitVote = (vote: string) => {
    console.log(vote);
  }
}
