import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  personajes: Personaje[] = [];
  page: number = 0;

  @Input() palabra: string = 'sin nombre'

  constructor( 
    private marvelService: MarvelService 
  ) { }

  ngOnInit(): void {
    this.fetchPersonajes();
  }

  

  fetchPersonajes(){
    this.marvelService.getPersonajes()
    .subscribe( resp => {
      this.personajes = resp.data.results

    });
  }

  siguiente(){
    this.page ++;
  }

  anterior(){
    if(this.page > 0){
      this.page --;
    }
  }

}
