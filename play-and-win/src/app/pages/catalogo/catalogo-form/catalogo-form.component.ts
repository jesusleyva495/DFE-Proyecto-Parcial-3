import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Catalogo } from 'src/app/models/juego';

@Component({
  selector: 'app-catalogo-form',
  templateUrl: './catalogo-form.component.html',
  styleUrls: ['./catalogo-form.component.scss']
})
export class CatalogoFormComponent {

  @Input() juegos: Catalogo[] = [];

  @Output() enviarVenta = new EventEmitter<Catalogo>();

  onEnviarVenta(juego: Catalogo){
    this.enviarVenta.emit(juego);
  }
}
