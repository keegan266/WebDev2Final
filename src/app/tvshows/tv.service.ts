import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TvService{
    constructor(private http: HttpClient){
        
    }

    tvUrl = 'https://api.themoviedb.org/3/tv/latest?api_key=<<api_key>>&language=en-US';

    getTv(): Observable<[]> {
        return this.http.get<[]>(this.tvUrl);
    }
}