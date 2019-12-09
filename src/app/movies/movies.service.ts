import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class MovieService{
    constructor(private http: HttpClient){
        
    }
    movieUrl = 'https://api.themoviedb.org/3/movie/latest?api_key=342ca3c54a266dbfc90258ddb27a03bf&language=en-US';

    nowPlayMovieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=342ca3c54a266dbfc90258ddb27a03bf&language=en-US&page=1';

    getMovie(): Observable<any[]> {
        return this.http.get<any[]>(this.movieUrl);
    }

    getNowPlayingMovies(): Observable<any[]> {
        return this.http.get<any[]>(this.nowPlayMovieUrl);
    }
        
    
}