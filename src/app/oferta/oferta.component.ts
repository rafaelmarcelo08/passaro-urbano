import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from './../services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService
  ]
})
export class OfertaComponent implements OnInit {

  public oferta!: OfertaModel

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,

  ) { }


  ngOnInit(): void {

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: OfertaModel) => {
        this.oferta = oferta;
      });
  }
}
