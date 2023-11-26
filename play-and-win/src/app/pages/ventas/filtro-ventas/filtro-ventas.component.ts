import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtro-ventas',
  templateUrl: './filtro-ventas.component.html',
  styleUrls: ['./filtro-ventas.component.scss']
})
export class FiltroVentasComponent {
  @Input() mensaje: string = "";
}
