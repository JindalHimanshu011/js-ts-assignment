import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { movieType, addMovieType } from '../interface'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-fav-movie',
  imports: [CommonModule, FormsModule],
  templateUrl: './fav-movie.html',
  styleUrl: './fav-movie.css'
})
export class FavMovie {

  returnData: any[] = [];
  GenreFilter: string = '';
  constructor(private router: Router) { }

  ngOnInit() {
    let movieRecord: movieType[] = [];

    let movies = localStorage.getItem('movies');
    let parseData = "";

    if (movies) {
      parseData = JSON.parse(movies);
      movieRecord = Array.isArray(parseData) ? parseData : [];
    }
    this.returnData = movieRecord;
  }


  public filterData() {
    let favItem: any[] = [];
    let favMovie = localStorage.getItem('favMovie');
    if (favMovie) {
      favItem = favMovie.split(',');
    }
    let movieRecord: addMovieType[] = [];

    let movies = localStorage.getItem('movies');
    let parseData = "";

    if (movies) {
      parseData = JSON.parse(movies);
      movieRecord = Array.isArray(parseData) ? parseData : [];
    }
    movieRecord.forEach(item => {
      item.isFav = favItem.includes(item.id.toString());
    })
    this.returnData = movieRecord;


    return this.returnData.filter(
      expence => expence.genre?.toLowerCase().includes(this.GenreFilter.toLowerCase())
        && expence.isFav == true)
  }

  public movieList(): void {
    this.router.navigate(['movielist']);
  }
}
