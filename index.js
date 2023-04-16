/*importaciòn de clases*/
import {Cliente} from './Cliente.js';
import {cuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente('Leonardo', '1234567890', '1234567');
const cliente2 = new Cliente('Maria', '0987654321', '7654321');

const cuentaDeLeonardo = new cuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new cuentaCorriente(cliente2,'2', '002');

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual (CuentaLeonardo) ${saldo}`);

console.log (cuentaDeMaria.cliente)
console.log (cuentaDeLeonardo.cliente)