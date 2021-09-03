import { Injectable } from '@angular/core';

import { Pedido } from '../model/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor() { }

  public efetivarCompra(pedido: Pedido): void {
    console.log(pedido);
  }
}
