import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/dashboard/inicio/inicio.component';
import { ExplorerComponent } from './pages/ventas/explorer/explorer.component';
import { ExplorerCatalogoComponent } from './pages/catalogo/explorer-catalogo/explorer-catalogo.component';
import { PaginaNoEncontradaComponent } from './pages/autenticacion/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'dashboard', component: InicioComponent},
  { path: 'ventas', component: ExplorerComponent},
  { path: 'catalogo', component: ExplorerCatalogoComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
