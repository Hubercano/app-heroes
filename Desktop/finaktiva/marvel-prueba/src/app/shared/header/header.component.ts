import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  palabra: string = '';

  constructor() { }

  buscar(){
    console.log(this.palabra)
  }

}
