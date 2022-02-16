import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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

  private apiUrl: string = `https://gateway.marvel.com:443/v1/public/characters?limit=90&ts=1&apikey=${ environment.apiKey }`

  constructor( 
    private http: HttpClient 
  ) { }

  getPersonajes():Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
