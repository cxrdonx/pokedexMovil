import { Component, OnInit } from '@angular/core';
import {PetitionsService} from '../services/petitions.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css'],
  providers: [PetitionsService]
})
export class PokeComponent implements OnInit {
  public pokemon: any;

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
  }

}
