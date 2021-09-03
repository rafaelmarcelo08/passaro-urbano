import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor() { }

  public efetivarCompra(): void {
    console.log('Chegamos ate aqui');
  }
}
