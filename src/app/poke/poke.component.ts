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

  constructor(private _petitionsService: PetitionsService){
     this.pokemonId = 1;
  }
  ngOnInit() {
    
    this.getPokemonId();

    this._petitionsService.getHability().subscribe(
      result =>{
        this.hability = result;
  
      },
      error =>{
           console.log(<any>error);
      }
    )

    this._petitionsService.getTypes().subscribe(
      result =>{
        this.types = result;
  
      },
      error =>{
           console.log(<any>error);
      }
    )
    
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
  }
}
