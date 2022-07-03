import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  movies: any = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList(): void {
    this.moviesService.getMovies()
        .subscribe(movie => {
          this.movies = movie.data.movies;
          console.log(this.movies);
          if(movie) this.loading = false;
        });
  }

}
