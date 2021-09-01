import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: String = '';
  public numero: String = '';
  public complemento: String = '';
  public formaPagamento: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: String): void {
    this.endereco = endereco;
    console.log(this.endereco);
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    console.log(this.numero);
  }

  public atualizaComplemento(complemento: String): void {
    this.complemento = complemento;
    console.log(this.complemento);
  }

  public atualizaFormaPagamento(formaPagamento: String): void {
    this.formaPagamento = formaPagamento;
    console.log(this.formaPagamento);
  }

}

