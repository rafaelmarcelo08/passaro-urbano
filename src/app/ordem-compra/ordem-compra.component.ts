import { Component, OnInit } from '@angular/core';

import { Pedido } from './../model/pedido.model';
import { OrdemCompraService } from '../services/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [
    OrdemCompraService
  ]
})
export class OrdemCompraComponent implements OnInit {

  public pedido = new Pedido('','','','');

  public endereco: String = '';
  public numero: String = '';
  public complemento: String = '';
  public formaPagamento: String = '';

  /**Atributos de controle de validacao dos campos */
  public enderecoValido!: Boolean;
  public numeroValido!: Boolean;
  public complementoValido!: Boolean;
  public formaPagamentoValido!: Boolean;

  /**Atributos para estado primitivo dos campos */
  public enderecoEstadoPrimitivo: Boolean = true;
  public numeroEstadoPrimitivo: Boolean = true;
  public complementoEstadoPrimitivo: Boolean = true;
  public formaPagamentoEstadoPrimitivo: Boolean = true;

  /**Controlar botao */
  public formaEstado: String = 'disabled'

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit(): void {
    //this.ordemCompraService.efetivarCompra();
  }

  public atualizaEndereco(endereco: String): void {
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
      console.log(this.numeroValido);
    } else {
      this.numeroValido = false;
      console.log(this.numeroValido);
    }
    this.habilitaForm();
  }

  public atualizaComplemento(complemento: String): void {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  public atualizaFormaPagamento(formaPagamento: String): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (this.enderecoValido == true &&
      this.enderecoValido == true &&
      this.formaPagamentoValido == true) {
      this.formaEstado = '';
    } else {
      this.formaEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formapagamento = this.formaPagamento;
    console.log('teste', this.pedido);
    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe();
  }

}
