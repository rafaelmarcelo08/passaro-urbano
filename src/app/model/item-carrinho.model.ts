export class ItemCarrinho {

    constructor(
        public id: Number,
        public imagem: ImagemURL,
        public titulo: String,
        public descricao_oferta: String,
        public valor: number,
        public quantidade: number
    ) { }
}

interface ImagemURL {
    url: String;
}