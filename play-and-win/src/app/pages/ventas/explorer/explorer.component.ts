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

  get importe(): string {
    if (this.cargandoDatos) {
      return 'Cargando...';
    } else {
      if (this.table.length > 0) {
        const total = this.table.reduce((sum, ventas) => sum + ventas.precio, 0);
        return `${total}`;
      } else {
        return 'No se han encontrado registros';
      }
    }
  }

  private getJuegosListos() {
    this.cargandoDatos = true;

    this.data.getJuegosListos().subscribe(x => {
      this.cargandoDatos = false;
      this.table = x;
    })
  }

  aplicarFiltro(filtro: any){
    this.table = this.aplicarLogicaFiltro(this.table, filtro);
  }

  private aplicarLogicaFiltro(datos: Venta[], filtro: any): Venta[] {
    let resultado: Venta[] = datos;

    if(filtro.estado){
      resultado = resultado.filter(venta => venta.estado === filtro.estado);
    }

    return resultado;
  }
}
