/*importaciòn de clases*/
import {Cliente} from './Cliente.js';
import {cuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.ineCliente = '1234567890';
cliente.rfcCliente = '1234567';

const cuentaDeLeonardo = new cuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual (CuentaLeonardo) ${saldo}`);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.ineCliente = '0987654321';
cliente2.rfcCliente = '7654321';

const cuentaDeMaria = new cuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente;

cuentaDeLeonardo.transferirParaCuenta(100, cuentaDeMaria);

let saldoMaria = cuentaDeMaria.verSaldo();
console.log('El saldo actual (CuentaMaria) ' + saldoMaria);

let saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual (CuentaLeonardo) ' + saldoLeonardo);