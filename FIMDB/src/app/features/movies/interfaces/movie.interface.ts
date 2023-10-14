export interface Movie {
  id: string;
  name: string;
  genre: string;
  director: string;
  year: number;
  description: string;
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