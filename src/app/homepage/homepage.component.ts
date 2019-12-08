import { Component } from "@angular/core";
import { MovieService } from '../movies/movies.service';
import { TvService } from '../tvshows/tv.service';

@Component({
    selector: 'home-root',
    templateUrl: './homepage.component.html'
})

export class HomeComponent {
    title = 'homePage';
    homeMovie = [];
    homeTv = [];

    //grab current movie and tv show
    constructor(private movieService: MovieService, private tvService: TvService) {
        this.movieService.getMovie().subscribe(movieObserved => {
            this.homeMovie = movieObserved;
        });
        this.tvService.getTv().subscribe(tvObserved => {
            this.homeTv = tvObserved;
        });
    }    
}