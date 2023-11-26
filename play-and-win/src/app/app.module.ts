import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacionModule } from './pages/autenticacion/autenticacion.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { VentasModule } from './pages/ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AutenticacionModule,
    DashboardModule,
    VentasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
