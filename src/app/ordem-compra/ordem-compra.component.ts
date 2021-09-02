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

  /**Atributos de controle de validacao dos campos */
  public enderecoValido!: Boolean;
  public numeroValido!: Boolean;
  public complementoValido!: Boolean;
  public formaPagamentoValido!: Boolean;


  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: String): void {
    this.endereco = endereco;

    if (endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    if (this.numero.length > 0) {
      this.numeroValido = true;
      console.log(this.numeroValido);
    } else {
      this.numeroValido = false;
      console.log(this.numeroValido);
    }
  }

  public atualizaComplemento(complemento: String): void {
    this.complemento = complemento;

    if (this.complemento.length > 0) { 
      this.complementoValido = true;
    }
  }
  
  public atualizaFormaPagamento(formaPagamento: String): void {
    this.formaPagamento = formaPagamento;
    console.log(this.formaPagamento);
    
    if(this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    }else {
      this.formaPagamentoValido = false;
    }
  }

}

