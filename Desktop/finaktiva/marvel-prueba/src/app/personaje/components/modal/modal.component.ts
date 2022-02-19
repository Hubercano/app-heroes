import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { MarvelService } from '../../services/marvel.service';
import { Comic } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  comic!: Comic;
  @Input() uri!: string;
  

  constructor(
    private modalService:  ModalService,
    private marvelService: MarvelService
  ) { }

  ngOnInit(): void {
    this.fetchComic();
  }

  fetchComic(){
    this.marvelService.getComic(this.uri)
    .subscribe( resp => {
      this.comic = resp.data.results[0]
    });
  }

  agregarComic(){
    this.marvelService.agregarComic(this.comic)
    this.modalService.$modal.emit(false)
  }

  closeModal(){
    this.modalService.$modal.emit(false)
  }

}
