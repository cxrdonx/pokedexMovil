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
  public getEvolutionsImage:any;
  public getEvolutionsImage2:any;
  public getEvolutionsImage3:any;
  public getEvolutions1:any;
  public getEvolutions2:any;
  public getEvolutions3:any;
  public allEvollutions: any;
  public pokemonName: any;
  public money: any;
 public prueba: any;
 public evolucion: any;
 
 public arr: Array<String> = [];
 public borrar:any;

  constructor(private _petitionsService: PetitionsService){
     this.pokemonId = 1;

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
      console.log("evolucion 2:::::");
      console.log(this.evolutions);
       this._petitionsService.getEvolution(this.evolutions).subscribe(
    result =>{

      //TODO ESTO MOVERLO AL COMPONENT.HTML PARA COMPROBAR SI ESTAN VACIOS O NO 
       // O MODIFICAR SOLO LOS CONSOLE.LOG 
this.borrar = this.getEvolutions3.chain.species.name;
   if(this.borrar != null){

   
     this.getEvolutions3 = result;
     this.getEvolutions2 = result;
    
   }

        this.getEvolutions3 = result;
      this.getEvolutions2 = result;
    //    this.getEvolutions1 = result; 
  //      this.getEvolutions1 = this.getEvolutions1.chain.evolves_to[0].evolves_to[0].species.name;
        this.getEvolutions2 = this.getEvolutions2.chain.evolves_to[0].species.name;
       this.getEvolutions3 = this.getEvolutions3.chain.species.name;
        this.seeEvolutions();
       
        this.arr.push(this.getEvolutions1, this.getEvolutions2, this.getEvolutions3);
        
        for(let i in this.arr){
             console.log(this.arr[i]);
        }


    },
  )
    },
    error =>{
        console.log(<any>error);
    }
  )

  this._petitionsService.getPokemon(this.getEvolutions2).subscribe(
    result=>{
        this.getEvolutionsImage2 = result;
    }
  )

  this._petitionsService.getPokemon(this.getEvolutions3).subscribe(
     result=>{
       this.getEvolutionsImage3 = result;
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

   }

   buscarPokemon(){
    this._petitionsService.getPokemon(this.getEvolutions1).subscribe(
      result =>{
         this.getEvolutionsImage = result;
         console.log("here:::");
         console.log(this.getEvolutionsImage);
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

   buscarPokemon2(){
     this._petitionsService.getPokemon(this.getEvolutions2).subscribe(
       result =>{
         this.getEvolutionsImage2 = result;
     
       },
       error =>{
         console.log(<any>error);
       }
     )
   }

   buscarPokemon3(){
      this._petitionsService.getPokemon(this.getEvolutions3).subscribe(
        result =>{
          this.getEvolutionsImage3 = result;
        },
        error =>{
          console.log(<any>error);
        }
      )
   }

 
   }

  
  







