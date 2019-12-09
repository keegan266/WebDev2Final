import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TvService{
    constructor(private http: HttpClient){
        
    }

    tvUrl = 'https://api.themoviedb.org/3/tv/latest?api_key=342ca3c54a266dbfc90258ddb27a03bf&language=en-US';

    tvPopUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=342ca3c54a266dbfc90258ddb27a03bf&language=en-US&page=1'


    getTv(): Observable<object[]> {
        return this.http.get<object[]>(this.tvUrl);
    }

    getTvPop(): Observable<object[]> {
        return this.http.get<object[]>(this.tvPopUrl);
    }
}