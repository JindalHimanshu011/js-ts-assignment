import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addMovieType } from '../interface'
@Component({
  selector: 'app-add-movie',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovie {

  movieForm: FormGroup = new FormGroup({
    genre: new FormControl("", [Validators.required, Validators.maxLength(10)]),
    title: new FormControl("", [Validators.required]),
  })
  constructor(private router: Router) {

  }

  save() {
    let formValue = this.movieForm.value;

    let movie: addMovieType = {
      id: 1,
      title: formValue.title,
      genre: formValue.genre,
      isFav: false
    }
    let parseData = "";
    let movieRecord: addMovieType[] = [];
    let maxId = 0;

    let movies = localStorage.getItem('movies');

    if (movies) {
      parseData = JSON.parse(movies);
      movieRecord = Array.isArray(parseData) ? parseData : [];
      maxId = Math.max(...movieRecord.map(movie => movie.id));
      movie.id = maxId + 1;
    }
    movieRecord.push(movie);

    localStorage.setItem('movies', JSON.stringify(movieRecord));
    this.router.navigate(['movielist']);
    alert('Movie added successfully');
  }

  public goToMovie() : void
  {
    this.router.navigate(['movielist']);
  }

}
