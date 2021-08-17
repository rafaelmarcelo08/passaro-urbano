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
        return this.http.get<OfertaModel[]>(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<OfertaModel[]> {
        return this.http.get<OfertaModel[]>(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta) => resposta);
    }

    public getOfertaPorId(id: Number): Promise<OfertaModel> {
        return this.http.get<OfertaModel>(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.shift()
            });
    }

    public getComoUsarPorId(id: Number): Promise<String> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao;
            });
    }

    public getOndeFicaPorId(id: Number): Promise<String> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao;
            });
    }
}