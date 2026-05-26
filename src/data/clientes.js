const Cliente = require("../model/cliente");

const clientes = [
  new Cliente(1, "João Silva", "(11) 99999-9999", "Rua A, 123"),
  new Cliente(2, "Maria Oliveira", "(21) 98888-8888", "Av. B, 456"),
  new Cliente(3, "Carlos Pereira", "(31) 97777-7777", "Travessa C, 789"),
];

module.exports = clientes;
