import { Pipe, PipeTransform } from '@angular/core';
import { Comic } from '../interfaces/personaje.interface';

@Pipe({
  name: 'conjuntoFavoritos'
})
export class ConjuntoFavoritosPipe implements PipeTransform {

  transform(comic: any, id: string = ''): any {
    
    const nuevaListaComic: any[] = [];

    for (const item of comic) {
      const itemList: any = nuevaListaComic.find(obj => obj[id] === item[id]);
      if (itemList) {
        console.log('se repite ' + item.id)
      }else{
        nuevaListaComic.push({...item});
      }
    }
    
    return nuevaListaComic;
  }

}
