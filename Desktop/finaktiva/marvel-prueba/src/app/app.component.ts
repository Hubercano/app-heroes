import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Input() palabra: string = '';
  
  title = 'marvel-prueba';

  buscar(){
    console.log(this.palabra)
  }
}
