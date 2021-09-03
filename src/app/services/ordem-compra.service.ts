import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pedido } from '../model/pedido.model';
import { URL_API } from "../app.api";

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor(
    private http: HttpClient
  ) { }

  public efetivarCompra(pedido: Pedido): void {
    //this.http.post(`${URL_API}/`, pedido);
  }
}
