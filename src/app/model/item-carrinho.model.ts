export class ItemCarrinho {

    constructor(
        public id: number,
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