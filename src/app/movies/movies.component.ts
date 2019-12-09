import { Component } from "@angular/core";
import { MovieService } from '../movies/movies.service';

@Component({
    templateUrl: './movies.component.html'
})

export class MovieComponent {
    title = 'Movies';
    movies:any[] = [];

    constructor(private movieService: MovieService) {
        this.movieService.getNowPlayingMovies().subscribe(movieObserved => {
            this.movies.push(movieObserved);
            console.log(this.movies);
        })
    }
}