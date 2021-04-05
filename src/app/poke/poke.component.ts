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

  constructor(private _petitionsService: PetitionsService){
  }
  ngOnInit() {
    this._petitionsService.getPokemon().subscribe(
        result =>{
           this.pokemon = result;
    //Object
        },
       error =>{
         console.log(<any>error);
        }
    )

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

}
