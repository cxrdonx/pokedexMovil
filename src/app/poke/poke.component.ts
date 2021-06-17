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
  public getEvolutions1:any;
  public getEvolutions2:any;
  public getEvolutions3:any;
  public allEvollutions: any;
  public pokemonName: any;
 public prueba: any;
 public evolucion: any;

  constructor(private _petitionsService: PetitionsService){
     this.pokemonId = 5;

  }
  ngOnInit() {
    this.seeEvolutions();
   this.getPokemonId();
  this.buscarPokemon();
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
           console.log(this.pokemon);
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

      //TODO ESTO MOVERLO AL COMPONENT.HTML PARA COMPROBAR SI ESTAN VACIOS O NO 
       // O MODIFICAR SOLO LOS CONSOLE.LOG 
      this.getEvolutions1 = result;
      this.getEvolutions2 = result;
      this.getEvolutions3 = result;

      this.getEvolutions1 = this.getEvolutions1.chain.evolves_to[0].evolves_to[0].species.name;
      this.getEvolutions2 = this.getEvolutions2.chain.evolves_to[0].species.name;
      this.getEvolutions3 = this.getEvolutions3.chain.species.name;
      
        console.log(this.prueba);
        this.seeEvolutions();
        this.buscarPokemon();
    },
  )
    },
    error =>{
        console.log(<any>error);
    }
  )
     
}
    seeEvolutions(){
      this._petitionsService.getPokemon(this.prueba).subscribe(
        result =>{
           this.pokemon = result;
           console.log(this.pokemon);
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

   }

   buscarPokemon(){
    this._petitionsService.getPokemon(this.getEvolutions1).subscribe(
      result =>{
         this.getEvolutions = result;
         console.log("EVOLUCION");
         console.log(this.getEvolutions);
      },
     error =>{
       console.log(<any>error);
      }
  );
  this._petitionsService.getHability(this.prueba).subscribe(
    result =>{
       this.hability = result;
    },
   error =>{
     console.log(<any>error);
    }
);
   }

 
   }

  
  







