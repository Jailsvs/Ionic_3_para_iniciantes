import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {


  private baseAPIPath = "https://api.themoviedb.org/3";
  private myKey = "dd73ade83e7e58c6dc5ec80816d7392c"
  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }
//https://developers.themoviedb.org/3/movies
//https://api.themoviedb.org/3/movie/550?api_key=dd73ade83e7e58c6dc5ec80816d7392c
  getLatestMovies(){
    return this.http.get(this.baseAPIPath+"/movie/popular?api_key="+this.myKey);
}
}
