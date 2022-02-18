import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { ConjuntoFavoritosPipe } from './pipes/conjunto-favoritos.pipe';

@NgModule({
  declarations: [
    HeroeComponent,
    FiltroPipe,
    ModalComponent,
    FavoritosComponent,
    ConjuntoFavoritosPipe
  ],
  exports: [
    HeroeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonajeModule { }
