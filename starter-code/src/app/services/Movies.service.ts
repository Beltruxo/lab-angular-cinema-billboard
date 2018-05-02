import { Injectable } from '@angular/core';
import { MoviesInterface } from './movies-interface';
import movieList from '../../sample-movies';
import * as _ from 'underscore';

@Injectable()
export class MoviesService {
movies : Array<MoviesInterface> = movieList;
constructor() { }

getMovies(){
  return this.movies;
  }
  getMovie(id){
    return _.findWhere(this.movies, { id });
  }
}
