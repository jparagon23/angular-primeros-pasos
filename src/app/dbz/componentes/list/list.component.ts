import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Output()
  public onDelete:EventEmitter<string>= new EventEmitter();

  @Input()
  public characterList:Character[]=[];



  onDeleteCharacter(id:string):void {
    //TODO Emitir el id del personaje
    console.log(id);
    this.onDelete.emit(id);

  }

}
