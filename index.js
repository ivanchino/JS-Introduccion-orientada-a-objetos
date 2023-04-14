/*importaciòn de clases*/
import {Cliente} from './Cliente.js';
import {cuentaCorriente} from './cuentaCorriente.js';

const cliente = new Cliente('Leonardo', '1234567890', '1234567');
const cuentaDeLeonardo = new cuentaCorriente('1', '001');
const cliente2 = new Cliente('Maria', '0987654321', '7654321');

console.log(cliente, cuentaDeLeonardo);
console.log(cliente2);

// const cuentaDeLeonardo = new cuentaCorriente();
// cuentaDeLeonardo.numero = '1';
// cuentaDeLeonardo.agencia = '001';
// cuentaDeLeonardo.cliente = cliente;

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log(`El saldo actual (CuentaLeonardo) ${saldo}`);

const cuentaDeMaria = new cuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.setCliente = cliente2;

console.log (cuentaDeMaria.getCliente)

cuentaDeMaria.setCliente = 0;

console.log (cuentaDeMaria.getCliente)

let parametroValor = 100;
/*
console.log('Parámetro valor', parametroValor);
cuentaDeLeonardo.transferirParaCuenta(parametroValor, cuentaDeMaria);
console.log('Parámetro valor', parametroValor);

let saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria', cuentaDeMaria);

console.log('El saldo actual (CuentaMaria) ' + saldoMaria);

let saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual (CuentaLeonardo) ' + saldoLeonardo);
*/