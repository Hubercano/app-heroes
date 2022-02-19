import { Pipe, PipeTransform } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(personajes: Personaje[], page: number = 0, palabra: string = ''): Personaje[] {

    if(palabra.length === 0){
      return personajes.slice(page * 10 ,page * 10 + 10)
    }

    const filtrarPersonajes = personajes.filter(persona => persona.name.includes(palabra));
    return filtrarPersonajes.slice(page * 10 ,page * 10 + 10)
  }

}
