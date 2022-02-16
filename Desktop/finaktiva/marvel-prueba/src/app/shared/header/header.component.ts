import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  palabra: string = '';

  @Output() palabraBuscar: EventEmitter<string> = new EventEmitter();

  constructor() { }

  buscar(){
    this.palabraBuscar.emit( this.palabra )
  }

}
