/*importaciòn de clases*/
import {cuentaCorriente} from './cuentaCorriente.js';
import {cliente} from './cliente.js';

const cuentaDeLeonardo = new cuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.retiroDeCuenta(100);
console.log(`El saldo actual es: ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(10);
console.log(`El saldo actual es: ${saldo}`);