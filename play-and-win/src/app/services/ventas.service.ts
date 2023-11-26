import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Venta } from '../models/juego';

const API_PATH = 'https://6562e2afee04015769a69e54.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }


  getJuegosListos(): Observable<Venta[]> {
    const path = API_PATH + 'ventas';

    return this.http.get<Venta[]>(path);
  }

}
