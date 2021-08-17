import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { OfertasService } from './../../services/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [
    OfertasService
  ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica!: String;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOndeFicaPorId(this.route.snapshot.parent?.params['id'])
      .then((resposta) => {
        this.ondeFica = resposta;
      });
  }

}
