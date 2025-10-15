import { Routes } from '@angular/router';
import { AddMovie } from './add-movie/add-movie';
import { MovieList } from './movie-list/movie-list';
import { FavMovie } from './fav-movie/fav-movie'
export const routes: Routes = [
    {
        path: 'movielist',
        component: MovieList
    },
    {
        path: 'add-movie',
        component: AddMovie
    }, {
        path: 'fav-movie',
        component: FavMovie
    },
    {
        path: '',
        component: MovieList
    },

];
