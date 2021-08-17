import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [
    OfertasService
  ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar!: String;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getComoUsarPorId(this.route.snapshot.parent?.params['id'])
      .then((resposta: any) => {
        this.comoUsar = resposta;
      });

  }

}
