export interface Movie {
  id: string;
  name: string;
  genre: string[];
  description: string;
  director: string;
  year: number;
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
