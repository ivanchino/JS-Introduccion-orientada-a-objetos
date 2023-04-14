import { Cliente } from "./Cliente.js";

export class cuentaCorriente
{
    #cliente;
    numero;
    #saldo;
    agencia;

    set setCliente(valor) {
        if (valor instanceof Cliente) 
            this.#cliente = valor;
    }

    get getCliente() {
        return this.#cliente;
    }

    constructor() {
        this.#cliente = null;
        this.numero = '';
        this.agencia = '';
        this.#saldo = 0;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retiroDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){
        this.retiroDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
    }

}