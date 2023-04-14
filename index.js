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

console.log(cuentaDeLeonardo);

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.retiroDeCuenta(100);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
console.log(`El saldo actual es: ${saldo}`);