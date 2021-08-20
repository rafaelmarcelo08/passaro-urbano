import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';
import { OfertaModel } from './../shared/oferta.model';
import { Observable, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

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
  private unsubscribe!: Subscription;

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
  }

  public onKey(termoDaBusca: String): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);

    this.unsubscribe = this.ofertas.subscribe(
      (ofertas: OfertaModel[]) => {
        console.log(ofertas);
      },
      (error) => {
        console.log('Error status: ' + error.status);
      },
      () => {
        console.log("Fluxo de evento completo.");
      });
  }

  ngOnDestroy(): void {
    //this.unsub.unsubscribe();
  }
}
