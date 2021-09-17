import { Component, OnInit } from '@angular/core';

import { OfertasService } from './../services/ofertas.service';
import { OfertaModel } from '../model/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: [
    './restaurantes.component.css'
  ],
  providers: [
    OfertasService
  ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas!: OfertaModel[];

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: OfertaModel[]) => {
        this.ofertas = ofertas;
      });
  }

}
