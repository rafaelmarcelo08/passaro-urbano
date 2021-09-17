import { OfertaModel } from './../model/oferta.model';
import { Injectable } from '@angular/core';
import { ItemCarrinho } from '../model/item-carrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: ItemCarrinho[] = [];

  constructor() { }

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: OfertaModel): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
      );
      console.log(itemCarrinho);
  }
}
