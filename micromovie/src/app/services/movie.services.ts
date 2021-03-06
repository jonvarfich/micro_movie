import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from "../models/Movies";
import { map, delay } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })

  export class MovieService {
      private url = "https://api.themoviedb.org/3/movie/550?api_key=b7efb9ef15419744277f81e00d5458ad"
      constructor( private http: HttpClient ) { } //Se consigue informacion de la pagina 
  
  getMovie(title){
    return this.http.get(`${this.url})/Movie/${title}`);
  }

      
  
    }