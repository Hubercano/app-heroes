import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';
import { MarvelService } from '../../services/marvel.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  personajes: Personaje[] = [];
  page: number = 0;
  verModal: boolean = false;
  uri!: string;

  @Input() palabra: string = 'sin nombre';

  constructor( 
    private marvelService: MarvelService ,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.fetchPersonajes();
    this.modalService.$modal.subscribe(valor => {
      this.verModal = valor
    })
  }

  fetchPersonajes(){
    this.marvelService.getPersonajes()
    .subscribe( resp => {
      this.personajes = resp.data.results

    });
  }

  abrirModal(uri:string){
    this.uri = uri;
    this.verModal = true;
  }

  siguiente(){
    this.page ++;
  }

  anterior(){
    if(this.page > 0){
      this.page --;
    }
  }

}
