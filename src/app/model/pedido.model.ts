import { ItemCarrinho } from './item-carrinho.model';
export class Pedido {
    
    constructor(
        public endereco: String,
        public numero: String,
        public complemento: String,
        public formapagamento: String,
        public itens: ItemCarrinho[]
    ) { }
}