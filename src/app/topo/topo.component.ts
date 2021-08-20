import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [
    OfertasService
  ]
})
export class TopoComponent implements OnInit {

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
  }

  public onKey(termoDaBusca: String): void {
    console.log(termoDaBusca);
  }
}
