import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class MovieService{
    constructor(private http: HttpClient){
        
    }
    movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1';

    getMovie(): Observable<[]> {
        return this.http.get<[]>(this.movieUrl);
    }
}