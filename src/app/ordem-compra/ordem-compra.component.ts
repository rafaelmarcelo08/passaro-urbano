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
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService,
    CarrinhoService
  ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra!: Number;

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
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
    console.log('Array', this.carrinhoService.exibirItens());
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('formulario invalido');
      this.formulario.get('endereco')?.markAsTouched();
      this.formulario.get('numero')?.markAsTouched();
      this.formulario.get('complemento')?.markAsTouched();
      this.formulario.get('formaPagamento')?.markAsTouched();
    } else {
      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento
      );
      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((idPedido: Number) => {
          this.idPedidoCompra = idPedido;
        });
    }
  }
}
