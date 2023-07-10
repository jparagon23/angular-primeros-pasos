import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters:Character[]=[
    {
      id:uuid(),
      name: 'Krilin',
      power:1000
    },
    {
      id:uuid(),
      name:'goku',
      power:9500
    }
  ];

  addCharacter(character:Character):void{

    const newCharacter:Character= {
      id:uuid(),
      ...character
    };

    this.characters.push(character);

  }

  /* onDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  } */

  deleteCharacterById(id:string){

    this.characters = this.characters.filter(character=> character.id !==id);

  }

}
