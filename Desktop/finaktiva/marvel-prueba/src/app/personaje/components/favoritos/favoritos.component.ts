import { Component, OnInit } from '@angular/core';
import { Comic } from '../../interfaces/personaje.interface';
import { MarvelService } from '../../services/marvel.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styles: [
  ]
})
export class FavoritosComponent implements OnInit {

  comicFavoritos!: Comic[];

  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.comicFavoritos = this.marvelService.getObtenerFavoritos
  }

  get getFavoritos(){
    return this.marvelService.getObtenerFavoritos
  }

  eliminar(){

  }

}
