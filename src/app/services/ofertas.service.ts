import { Injectable } from "@angular/core";

@Injectable()
export class OfertasService {

    public getOfertas(): Array<string> {
        let ofertas = [
            'Oferta1',
            'Oferta2',
            'Oferta3'
        ];
        return ofertas;
    }
}