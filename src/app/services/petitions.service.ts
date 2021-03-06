import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
  export class PetitionsService{
     public url: string;
     public route: any;

      constructor(
          public _http: HttpClient 
      ){
         this.url = "https://pokeapi.co/api/v2/";
      }
   getPokemon(pokemonId:any): Observable<any> {
          return this._http.get(this.url + 'pokemon/'+pokemonId);
   }
    getHability(pokemonId:any): Observable<any>{
        return this._http.get(this.url +'pokemon-species/'+pokemonId);
    }
    getTypes(): Observable<any>{
        return this._http.get(this.url + 'type');
    }
    getUrl(pokemonId:any): Observable<any>{
        return this._http.get(this.url+'pokemon-species/'+pokemonId);
    }
    getEvolution(evolutions:any): Observable<any>{
          return this._http.get(evolutions);
          
    }
    getEvolution2(getEvolution2:any): Observable<any>{
        return this._http.get(this.url + 'pokemon/'+getEvolution2);
    }
    getBuscarPokemon1(getEvolutions1:any): Observable<any>{
        return this._http.get(this.url +'pokemon/'+getEvolutions1);
    }
    getBuscarPokemon3(getEvolutions3:any): Observable<any>{
        return this._http.get(this.url +'pokemon/'+getEvolutions3);
    }

}
