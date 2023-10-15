import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public movies: Movie[] = [];
  public filteredMovies: Movie[] = [];
  public isFetching: boolean = false;

  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(private readonly moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getAllMovies().subscribe((movies) => {
      this.movies = movies;
      this.filteredMovies = movies;
    });

    this.moviesService.isFetching.subscribe((isFetching) => (this.isFetching = isFetching));
  }

  filterMovies(query: string) {
    if (!query) {
      this.filteredMovies = this.movies;
    } else {
      this.filteredMovies = this.movies.filter((movie) =>
        movie.name.toLowerCase().includes(query.toLowerCase())
      );
    }
  }
}
