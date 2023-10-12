import { Component, Input } from '@angular/core';
import { Movie } from "../../../interfaces/movie.interface";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  @Input() movie: Movie = {} as Movie;


  // movie = {
  //   id: "64e642d893169b2d5c0d6e28",
  //   name: "John Wick - Chapter 4",
  //   genre: "Action",
  //   director: "Chad Stahelski",
  //   year: 2023,
  //   description: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
  //   rating: {
  //     votes: [
  //       8,
  //       9
  //     ],
  //     averageValue: 8.5
  //   }
  // }
}
