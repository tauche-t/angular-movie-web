import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
  detailUrl = "https://yts.mx/api/v2/movie_details.json?movie_id";

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.url);
  }

  getMovie(id: number): Observable<any> {
    const url = `${this.detailUrl}=${id}`;
    return this.http.get(url);
  }
}
