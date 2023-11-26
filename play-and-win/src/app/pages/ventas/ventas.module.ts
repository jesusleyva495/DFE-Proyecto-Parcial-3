import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasService } from 'src/app/services/ventas.service';

import { DetallesComponent } from './detalles/detalles.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { TableComponent } from './table/table.component';
import { FiltroVentasComponent } from './filtro-ventas/filtro-ventas.component';

@NgModule({
  declarations: [
    DetallesComponent,
    ExplorerComponent,
    TableComponent,
    FiltroVentasComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    VentasService,
  ],
  exports: [
    ExplorerComponent
  ]
})
export class VentasModule { }
