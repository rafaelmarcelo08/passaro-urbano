import { OfertaModel } from '../model/oferta.model';
import { Component, OnInit } from '@angular/core';

import { OfertasService } from './../services/ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: [
    './diversao.component.css'
  ],
  providers: [
    OfertasService
  ]
})
export class DiversaoComponent implements OnInit {

  public ofertas !: OfertaModel[];

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('diversao')
      .then((ofertas: OfertaModel[]) => {
        this.ofertas = ofertas;
      });
  }

}
