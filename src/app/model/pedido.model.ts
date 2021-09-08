export class Pedido {
    
    constructor(
        public endereco: String,
        public numero: String,
        public complemento: String,
        public formapagamento: String
    ) { }
}