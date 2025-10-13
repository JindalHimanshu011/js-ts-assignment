import { CommonModule } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {CustomFavStyle} from '../custom-fav-style'

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, FormsModule,CustomFavStyle],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  returnData: any[] = [];
  GenreFilter: string = '';
  constructor(private router: Router) { }

  ngOnInit() {

    interface movieType {
      genre: string;
      title: string;
    }
    let movieRecord: movieType[] = [];

    let movies = localStorage.getItem('movies');
    let parseData = "";

    if (movies) {
      parseData = JSON.parse(movies);
      movieRecord = Array.isArray(parseData) ? parseData : [];
    }
    this.returnData = movieRecord;
  }


  filterData() {
    let favItem: any[] = [];
    let favMovie = localStorage.getItem('favMovie');
    if (favMovie) {
      favItem = favMovie.split(',');
    }
    interface movieType {
      genre: string;
      title: string;
      isFav: Boolean;
      id: Number;
    }
    let movieRecord: movieType[] = [];

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
      expence => expence.genre?.toLowerCase().includes(this.GenreFilter.toLowerCase()))
  }
  addFav(id: number) {

    let favItem: any[] = [];

    let favMovie = localStorage.getItem('favMovie');
    if (favMovie) {
      favItem = favMovie.split(',');
    }
    favItem.push(id);

    localStorage.setItem('favMovie', favItem.toString());
    alert('Added to fav');
  }
  goBack() {
    this.router.navigate(['add-movie']);
  };

}
