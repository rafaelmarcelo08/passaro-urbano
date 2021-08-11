import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { OfertaModel } from "../shared/oferta.model";
import { URL_API } from "../app.api";

@Injectable()
export class OfertasService {

    constructor(
        private http: HttpClient
    ) { }

    public getOfertas(): Promise<OfertaModel[]> {
        return this.http.get<OfertaModel[]>(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<OfertaModel[]> {
        return this.http.get<OfertaModel[]>(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta) => resposta);
    }

    public getOfertaPorId(id: Number): Promise<OfertaModel> {
         return this.http.get<OfertaModel>(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) =>  {
                return resposta.shift()
            });
    }
}