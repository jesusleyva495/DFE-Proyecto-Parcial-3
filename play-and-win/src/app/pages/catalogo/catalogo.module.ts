import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasService } from 'src/app/services/ventas.service';

import { ExplorerCatalogoComponent } from './explorer-catalogo/explorer-catalogo.component';
import { CatalogoFormComponent } from './catalogo-form/catalogo-form.component';

@NgModule({
  declarations: [
    ExplorerCatalogoComponent,
    CatalogoFormComponent
  ],
  providers: [
    VentasService
  ],
  imports: [
    CommonModule
  ]
})
export class CatalogoModule { }
