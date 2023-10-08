export interface Movie {
  name: string;
  genre: string;
  director: string;
  rating: Rating;
  imageUrl: string;
}

export interface Rating {
  votes: number[];
  averageValue: number;
}

export interface UserRating {
    ratingValue: number;
}
