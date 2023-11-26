import { Component } from '@angular/core';

import { Venta } from 'src/app/models/juego';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent{

  cargandoDatos = false;

  table: Venta[] = [];

  constructor(private data: VentasService){

  }

  ngOnInit(){
    this.getJuegosListos();
  }

  get mensaje(): string {
    if(this.cargandoDatos) {
      return 'Cargando...';
    } else{
      return this.table.length > 0 ? `${this.table.length} registro encontrados.` : 'No se han encontrado registros...';
    }
  }

  private getJuegosListos() {
    this.cargandoDatos = true;

    this.data.getJuegosListos().subscribe(x => {
      this.cargandoDatos = false;
      this.table = x;
    })
  }
}
