import { CommonModule } from '@angular/common';
import { Component, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomFavStyle } from '../custom-fav-style'
import { movieType, addMovieType } from '../interface'

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, FormsModule, CustomFavStyle],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  returnData: any[] = [];
  GenreFilter: string = '';
  constructor(private router: Router) { }

  public ngOnInit(): void {
    let movieRecord: movieType[] = [];

    let movies = localStorage.getItem('movies');
    let parseData = "";

    if (movies) {
      parseData = JSON.parse(movies);
      movieRecord = Array.isArray(parseData) ? parseData : [];
    }
    this.returnData = movieRecord;
  }


  public filterData(): any[] {
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
      expence => expence.genre?.toLowerCase().includes(this.GenreFilter.toLowerCase()))
  }
  public addFav(id: number): void {
    let favItem: any[] = [];

    let favMovie = localStorage.getItem('favMovie');
    if (favMovie) {
      favItem = favMovie.split(',');
    }
    favItem.push(id);

    localStorage.setItem('favMovie', favItem.toString());
    alert('Added to fav');
  }

  public removeFav(id: number): void {

    let favItem: any[] = [];

    let favMovie = localStorage.getItem('favMovie');
    if (favMovie) {
      favItem = favMovie.split(',');
    }
    favItem = favItem.filter(item => item != id);

    localStorage.setItem('favMovie', favItem.toString());
    alert('Removed from fav');
  }
  public goBack(): void {
    this.router.navigate(['add-movie']);
  };
  public FavMovie(): void {
    this.router.navigate(['fav-movie']);
  }
}
