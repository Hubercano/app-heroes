import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  palabra: string = '';

  @Output() palabraBuscar: EventEmitter<string> = new EventEmitter();

  constructor() { }

  buscar(){
    this.palabraBuscar.emit( this.palabra )
  }

}
