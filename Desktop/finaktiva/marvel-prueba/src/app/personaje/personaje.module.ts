import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    HeroeComponent,
    FiltroPipe,
    ModalComponent
  ],
  exports: [
    HeroeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonajeModule { }
