import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Pedido } from '../model/pedido.model';
import { URL_API } from "../app.api";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  constructor(
    private http: HttpClient
  ) { }

  public efetivarCompra(pedido: Pedido): Observable<Number> {

    let headers = new HttpHeaders({ 'Content-type': 'application/json' });

    return this.http.post(
      `${URL_API}/pedidos`,
      JSON.stringify(pedido),
      {
        headers: headers
      }
    ).pipe(map((resposta: any) => {
      return resposta.id;
    }));
  }
}
