export class Movie {
  static count = 0

  constructor({
    title,
    director,
    releaseYear,
    runtimeMinutes,
    genre,
    rating,
    boxOfficeMillions,
    isOscarWinner,
  }) {
    this.id = Movie.count++ // Unique identifier
    this.title = title // e.g., 'Inception'
    this.director = director // e.g., 'Christopher Nolan'
    this.releaseYear = releaseYear // e.g., 2010
    this.runtimeMinutes = runtimeMinutes // e.g., 148
    this.genre = genre // e.g., 'Sci-Fi', 'Thriller'
    this.rating = rating // A score from 1 to 10
    this.boxOfficeMillions = boxOfficeMillions // Total box office in millions of USD
    this.isOscarWinner = isOscarWinner // True if it won a major Oscar (Best Picture, Director, Actor, etc.)
  }
}
