import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
  export class PetitionsService{
     public url: string;
      constructor(
          public _http: HttpClient 
      ){
         this.url = "https://pokeapi.co/api/v2/";
      }
      getPokemon(): Observable<any> {
          return this._http.get(this.url + 'pokemon/1');
  }
    getHability(): Observable<any>{
        return this._http.get(this.url +'pokemon-species/1');
    }
    getTypes(): Observable<any>{
        return this._http.get(this.url+'type/1');
    }
}
