import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';
import { OfertaModel } from './../shared/oferta.model';
import { OnDestroy } from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  of
} from 'rxjs';

import {
  switchMap,
  debounceTime,
  distinctUntilChanged,
  catchError
} from 'rxjs/operators'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [
    OfertasService
  ]
})
export class TopoComponent implements OnInit, OnDestroy {


  public ofertas!: Observable<OfertaModel[]>;
  private unSubscribe!: Subscription;
  private subjectPesquisa: Subject<String> = new Subject<String>();

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    // retorno de ofertas.
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termoDaBusca: String) => {
        // console.log("requisicao");

        if (termoDaBusca.trim() === '') { 
          return of<OfertaModel[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termoDaBusca);
      }),
      catchError((erro) => {
        console.log(erro)
        return of<OfertaModel[]>([]);
      })
    );
  }

  public onKey(termoDaBusca: String): void {
    /**Observador */
    console.log("keyUP", termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }

  ngOnDestroy(): void {
    this.unSubscribe.unsubscribe();
  }
}
