import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { retry } from 'rxjs/operators';
import { OfertaModel } from "../model/oferta.model";
import { URL_API } from "../app.api";

@Injectable()
export class OfertasService {

    constructor(
        private http: HttpClient
    ) { }

    public getOfertas(): Promise<OfertaModel[]> {
        return this.http.get<HttpResponse<OfertaModel[]>>(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<OfertaModel[]> {
        return this.http.get<HttpResponse<OfertaModel[]>>(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta);
    }

    public getOfertaPorId(id: Number): Promise<OfertaModel> {
        return this.http.get<HttpResponse<OfertaModel>>(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta.shift()
            });
    }

    public getComoUsarPorId(id: Number): Promise<String> {
        return this.http.get<HttpResponse<String>>(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao;
            });
    }

    public getOndeFicaPorId(id: Number): Promise<String> {
        return this.http.get<HttpResponse<String>>(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: any) => {
                return resposta[0].descricao;
            });
    }

    public pesquisaOfertas(termo: String): Observable<OfertaModel[]> {
        return this.http.get<OfertaModel[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .pipe(retry(10));
    }
}