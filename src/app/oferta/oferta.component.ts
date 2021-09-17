import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertaModel } from '../model/oferta.model';
import { OfertasService } from './../services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta!: OfertaModel

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,

  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((parametro: Params) => {
      this.ofertasService.getOfertaPorId(parametro.id)
        .then((oferta: OfertaModel) => {
          this.oferta = oferta;
        });
    });

  }

  ngOnDestroy(): void {
  }
}
