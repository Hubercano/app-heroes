import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  
 palabra: string = '';
  
  title = 'marvel-prueba';

  recibirmensaje(mensaje: string){
    this.palabra = mensaje
  }
  
}
