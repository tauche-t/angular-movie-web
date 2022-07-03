import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() summary?: any;
  @Input() year?: number;
  @Input() title?: string;
  @Input() coverImg?: any;
  @Input() id?: number;
  @Input() genres?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
