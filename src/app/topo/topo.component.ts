import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';
import { OfertaModel } from './../shared/oferta.model';
import { Observable, Subject, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

import { switchMap } from 'rxjs/operators'

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
      switchMap((termo: String) => {
        console.log("requisicao");
        return this.ofertasService.pesquisaOfertas(termo);
      })
    )

    this.ofertas.subscribe((ofertas: OfertaModel[]) => {
      console.log(ofertas);
    });
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
