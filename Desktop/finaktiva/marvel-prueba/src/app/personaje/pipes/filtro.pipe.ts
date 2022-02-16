import { Pipe, PipeTransform } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(personajes: Personaje[], page: number = 2): Personaje[] {
    
    return personajes.slice(page * 10 ,page * 10 + 10)
  }

}
