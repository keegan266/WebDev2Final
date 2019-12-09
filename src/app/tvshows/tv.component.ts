import { Component } from "@angular/core";
import { TvService } from './tv.service';

@Component({
    templateUrl: './tv.component.html'
})

export class TvComponent {
    title = 'Tv Shows';
    tvShows:any[] = [];

    constructor(private tvService: TvService) {
        this.tvService.getTvPop().subscribe(tvObserved => {
            this.tvShows.push(tvObserved);
            console.log(this.tvShows);
        })
    }
}