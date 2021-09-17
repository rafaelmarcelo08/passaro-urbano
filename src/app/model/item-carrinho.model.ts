export class ItemCarrinho {

    constructor(
        public id: Number,
        public imagem: ImagemURL,
        public titulo: String,
        public descricao_oferta: String,
        public valor: Number,
        public quantidade: Number
    ) { }
}

interface ImagemURL {
    url: string;
}