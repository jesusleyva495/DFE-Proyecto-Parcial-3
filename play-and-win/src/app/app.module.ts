import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VentasService } from './services/ventas.service';

import { AutenticacionModule } from './pages/autenticacion/autenticacion.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { VentasModule } from './pages/ventas/ventas.module';
import { CatalogoModule } from './pages/catalogo/catalogo.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    AutenticacionModule,
    DashboardModule,
    VentasModule,
    CatalogoModule
  ],
  providers: [VentasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
