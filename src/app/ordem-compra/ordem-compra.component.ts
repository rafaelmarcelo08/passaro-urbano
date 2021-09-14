import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
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
      'endereco': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(120)
        ]
      ),
      'numero': new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(20)
        ]
      ),
      'complemento': new FormControl(null),
      'formaPagamento': new FormControl(
        null,
        [
          Validators.required
        ]
      )
    }
  );

  ngOnInit() {

  }

  public confirmarCompra(): void {
    console.log(this.formulario);
  }
}
