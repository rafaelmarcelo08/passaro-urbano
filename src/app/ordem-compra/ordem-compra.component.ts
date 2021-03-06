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
import { ItemCarrinho } from './../model/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra!: Number;
  public itensCarrinho!: ItemCarrinho[];

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
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
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco')?.markAsTouched();
      this.formulario.get('numero')?.markAsTouched();
      this.formulario.get('complemento')?.markAsTouched();
      this.formulario.get('formaPagamento')?.markAsTouched();
    } else {
      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.carrinhoService.exibirItens()
      );

      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((idPedido: Number) => {
          this.idPedidoCompra = idPedido;
          this.carrinhoService.limparCarrinho();
        });
      

    }
  }

  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);
  }
}
