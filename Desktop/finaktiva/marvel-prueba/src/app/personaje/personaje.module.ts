import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { FiltroPipe } from './pipes/filtro.pipe';

@NgModule({
  declarations: [
    HeroeComponent,
    FiltroPipe
  ],
  exports: [
    HeroeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonajeModule { }
