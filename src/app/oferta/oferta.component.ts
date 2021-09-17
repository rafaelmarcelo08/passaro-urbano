import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertaModel } from '../model/oferta.model';
import { CarrinhoService } from '../services/carrinho.service';
import { OfertasService } from './../services/ofertas.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [
    OfertasService,
    CarrinhoService
  ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public oferta!: OfertaModel

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((parametro: Params) => {
      this.ofertasService.getOfertaPorId(parametro.id)
        .then((oferta: OfertaModel) => {
          this.oferta = oferta;
        });
    });
    console.log(this.carrinhoService.exibirItens());
  }

  ngOnDestroy(): void {
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
  }
}
