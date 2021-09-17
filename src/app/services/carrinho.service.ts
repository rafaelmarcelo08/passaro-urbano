import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../model/item-carrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens!: ItemCarrinho[];

  constructor() { }
}
