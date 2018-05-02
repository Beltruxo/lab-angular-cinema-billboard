import { Component, OnInit } from '@angular/core';
import {  MoviesService } from '../services/Movies.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-MyHomeComponent',
  templateUrl: './MyHomeComponent.component.html',
  styleUrls: ['./MyHomeComponent.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  movies:any

  constructor(public movieSample : MoviesService, public router:Router) {
    this.movies = this.movieSample.getMovies();
  }

  ngOnInit() {
 
    
  }

}
