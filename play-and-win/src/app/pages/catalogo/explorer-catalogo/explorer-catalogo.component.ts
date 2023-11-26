import { Component } from '@angular/core';

import { VentasService } from 'src/app/services/ventas.service';

import { Venta, Catalogo, VentaEstatus } from 'src/app/models/juego';

@Component({
  selector: 'app-explorer-catalogo',
  templateUrl: './explorer-catalogo.component.html',
  styleUrls: ['./explorer-catalogo.component.scss'],
})
export class ExplorerCatalogoComponent {
  juegos: Catalogo[] = [];
  nuevoJuego: Venta = {
    id: 0,
    estado: VentaEstatus.Disponible,
    titulo: '',
    telefono: 0,
    notas: '',
    precio: 0,
    fechaVenta: '',
    cliente: '',
    vendedor: '',
  };

  constructor(private data: VentasService) {}

  ngOnInit() {
    this.loadGames();
  }

  private loadGames() {
    this.data.getCatalogoListos().subscribe((juegos: Catalogo[]) => {
      this.juegos = juegos;
    });
  }

  setNuevosJuegos(JuegoDelCatalogo: Catalogo) {
    this.nuevoJuego.id = JuegoDelCatalogo.id;
    this.nuevoJuego.titulo = JuegoDelCatalogo.title;
    this.nuevoJuego.precio = JuegoDelCatalogo.price;
  }

  onEnviarJuego(juego: Catalogo) {
    this.data
      .postJuego({
        id: juego.id,
        estado: VentaEstatus.Disponible,
        titulo: juego.title,
        telefono: 6622547819,
        notas: 'Mal estado',
        precio: juego.price,
        fechaVenta: '26/11/2023',
        cliente: 'Big Boss',
        vendedor: 'Metal Gear',
      })
      .subscribe((response) => {
        this.loadGames();
      });
  }
}
