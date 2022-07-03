import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  loading: boolean = true;
  movie: any;
  time: any;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMoive();
  }

  getMoive(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.moviesService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie.data.movie;
        if(movie) this.loading = false;
      });
  }

}
