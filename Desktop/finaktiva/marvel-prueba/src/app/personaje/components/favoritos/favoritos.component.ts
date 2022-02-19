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
  comicAzar!: Comic;

  constructor(
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.comicFavoritos = this.marvelService.getObtenerFavoritos
  }

  get getFavoritos(){
    return this.marvelService.getObtenerFavoritos
  }

  eliminar(comic : Comic){
    this.marvelService.deleteComic(comic);
  }

  fetchComicAzar(id: string){
    this.marvelService.getComicAzar(id)
    .subscribe( resp => {
      this.comicAzar = resp.data.results[0]
      this.marvelService.agregarComic(this.comicAzar)
    });
  }

  agregarAzar(){
    let i;
    for(i = 1; i <= 3; i++){
      let num = Math.floor(Math.random()*13969 + 1)
      this.fetchComicAzar(num.toString());
    }
    
  }

}
