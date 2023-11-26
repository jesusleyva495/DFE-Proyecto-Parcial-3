import { Component, Input } from '@angular/core';

import { Venta } from 'src/app/models/juego';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() table: Venta[] = [];

  @Input() cargandoDatos = false;

  ventaSeleccionada: Venta | null = null;
}
