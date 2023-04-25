import { Component } from '@angular/core';
import { pokeimagem } from '../pokeimagem';

@Component({
  selector: 'app-pokeimagem',
  templateUrl: './pokeimagem.component.html',
  styleUrls: ['./pokeimagem.component.css']
})
export class PokeimagemComponent {
  id : number = 1;
  proximo(){
    this.id++;

  }

}
