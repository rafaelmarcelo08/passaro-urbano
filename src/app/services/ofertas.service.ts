import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { OfertaModel } from "../shared/oferta.model";

@Injectable()
export class OfertasService {

    constructor(
        private http: HttpClient
    ) { }

    public getOfertas(): Promise<OfertaModel[]> {
        return this.http.get<OfertaModel[]>('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            .then((resposta: any) => resposta);
    }
}