import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles/detalles.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    DetallesComponent,
    ExplorerComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
