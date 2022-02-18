import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Comic } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  /* 
    url:  https://gateway.marvel.com:443/v1/public/characters?apikey=106237f1c3d1dc3596fcf068c2829129
    publica: 106237f1c3d1dc3596fcf068c2829129
    privada: 15e1c9cbcbcaca7c5cd379a5c17b076d668017be
    ts: 1
    115e1c9cbcbcaca7c5cd379a5c17b076d668017be106237f1c3d1dc3596fcf068c2829129

    hash: f06ee039bfb0e523d95a17757facf150

    url: https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=106237f1c3d1dc3596fcf068c2829129&hash=f06ee039bfb0e523d95a17757facf150
  */

  private apiUrl: string = "https://gateway.marvel.com:443/v1/public/"

  private favoritos: Comic[] = JSON.parse(localStorage.getItem('localListaComics') || '[]');

  constructor( 
    private http: HttpClient
  ) { }

  getPersonajes():Observable<any>{
    const url = `${this.apiUrl}characters?limit=99&ts=1&apikey=${ environment.apiKey }`
    return this.http.get(url)
  }

  getComic(uri: string):Observable<any> {
    const url = `${ uri }?ts=1&apikey=${ environment.apiKey }`
    return this.http.get(url)
  }

  get getObtenerFavoritos():Comic[]{
    return [...this.favoritos]
  }

  agregarComic(comic: any, id: string = ''){
    
      const itemList: any = this.favoritos.find(obj => obj.id === comic.id);
      console.log(itemList)
      if (itemList) {
        console.log('se repite ' + comic.id)
      }else{
        this.favoritos.unshift({...comic});
        localStorage.setItem( 'localListaComics', JSON.stringify(this.favoritos))
      }

  }

}
