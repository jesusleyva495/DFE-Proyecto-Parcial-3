import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasService } from 'src/app/services/ventas.service';

import { DetallesComponent } from './detalles/detalles.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { TableComponent } from './table/table.component';
import { TotalComponent } from './total/total.component';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  declarations: [
    DetallesComponent,
    ExplorerComponent,
    TableComponent,
    TotalComponent,
    FiltroComponent
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
