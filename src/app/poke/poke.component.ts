import { analyzeAndValidateNgModules, getUrlScheme } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import {PetitionsService} from '../services/petitions.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css'],
  providers: [PetitionsService]
})
export class PokeComponent implements OnInit {
  public hability: any;
  public pokemon: any;
  public types: any;
  public pokemonId: any;
  public evolution:any;
  public evolutions:any;
  public getEvolutions:any;
  public getEvolutions2:any;
  public getEvolutions3:any;

  constructor(private _petitionsService: PetitionsService){
     this.pokemonId = 6;
  }
  ngOnInit() {
   this.getPokemonId();

/*
   this._petitionsService.getPokemon().subscribe(
    result =>{
      this.pokemon = result;
    },
    error =>{
      console.log(<any>error);
    }
  )
  */
  this._petitionsService.getTypes().subscribe(
    result =>{
      this.types = result;
    },
    error =>{
         console.log(<any>error);
    }
  );

  }

    getPokemonId(){
      this._petitionsService.getPokemon(this.pokemonId).subscribe(
        result =>{
           this.pokemon = result;
        },
       error =>{
         console.log(<any>error);
        }
    );
    this._petitionsService.getHability(this.pokemonId).subscribe(
      result =>{
         this.hability = result;
      },
     error =>{
       console.log(<any>error);
      }
  );

  ////// ACA SE PUEDE COMPACTAR GETURL Y GETHABILITY

  this._petitionsService.getUrl(this.pokemonId).subscribe(
    result =>{
      this.evolution = result;
      this.evolutions = this.evolution.evolution_chain.url;
       this._petitionsService.getEvolution(this.evolutions).subscribe(
    result =>{
      this.getEvolutions = result;
      this.getEvolutions2 = result;
      this.getEvolutions3 = result;
      this.getEvolutions = this.getEvolutions.chain.evolves_to[0].evolves_to[0].species.name;
      this.getEvolutions2 = this.getEvolutions2.chain.evolves_to[0].species.name;
      this.getEvolutions3 = this.getEvolutions3.chain.species.name;
      console.log(this.getEvolutions);
      console.log(this.getEvolutions2);
      console.log(this.getEvolutions3);
 
    },
    error =>{
      console.log(<any>error);
    }
  )
    },
    error =>{
        console.log(<any>error);
    }
  )
 
}
   }

  
  







