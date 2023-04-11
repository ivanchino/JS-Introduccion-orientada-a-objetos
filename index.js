class Cliente 
{
    nombreCliente;
    ineCliente;
    numeroCuenta;
    saldoCuenta;
    rfcCliente;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = 'Jose';
cliente1.ineCliente = '12345';
cliente1.numeroCuenta = '12345678'
cliente1.saldoCuenta = 2000;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.ineCliente = "12345426234";
cliente2.numeroCuenta = "12345678";
cliente2.saldoCuenta = 1000;

const cliente3 = new Cliente();

cliente3.nombreCliente = "Ivan";
cliente3.ineCliente = "987654";
cliente3.numeroCuenta = "4665";
cliente3.saldoCuenta = 1000;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);




