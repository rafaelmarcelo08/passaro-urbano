import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrdemCompraService } from '../services/ordem-compra.service';
import { Pedido } from '../model/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {
  }

  public confirmarCompra(formulario: NgForm): void {
    console.log(formulario.value);
  }
}
