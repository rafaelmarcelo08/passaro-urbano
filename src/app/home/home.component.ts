import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';

import { OfertaModel } from '../model/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<OfertaModel> = [];

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertas()
      .then((ofertas: Array<OfertaModel>) => {
        this.ofertas = ofertas;
      }).catch((error: any) => {
       // console.log(error);
      });
  }
}
