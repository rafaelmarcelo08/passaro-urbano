import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

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

  public formulario: FormGroup = new FormGroup(
    {
      'endereco': new FormControl(null),
      'numero': new FormControl(null),
      'complemento': new FormControl(null),
      'formaPagamento': new FormControl(null)
    }
  );

  ngOnInit() {

  }

  public confirmarCompra(): void {
    console.log(this.formulario.value);
  }
}
