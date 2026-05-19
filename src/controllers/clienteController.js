// src/controllers/clienteController.js

const clientes = require("../../data/clientes");

// GET /clientes — retorna todos os clientes
/*const listarClientes = (req, res) => {
  return res.status(200).json({
    sucesso: true,
    total: clientes.length,
    dados: clientes,
  });
};*/

const listarClientes = async (req, res) => {
  try {
    return res.status(200).json({
      sucesso: true,
      total: clientes.length,
      dados: clientes,
    });
  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar clientes.",
      erro: error.message,
    });
  }
};

// GET /clientes/:id — retorna um cliente pelo ID
/* const buscarClientePorId = (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      sucesso: false,
      mensagem: "ID inválido. Deve ser um número inteiro.",
    });
  }

  const cliente = clientes.find((c) => c.id === id);

  if (!cliente) {
    return res.status(404).json({
      sucesso: false,
      mensagem: `Cliente com ID ${id} não encontrado.`,
    });
  }

  return res.status(200).json({
    sucesso: true,
    dados: cliente,
  });
};*/

const buscarClientePorId = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID inválido. Deve ser um número inteiro.",
      });
    }

    const cliente = clientes.find((c) => c.id === id);

    if (!cliente) {
      return res.status(404).json({
        sucesso: false,
        mensagem: `Cliente com ID ${id} não encontrado.`,
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: cliente,
    });
  } catch (error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao buscar cliente por ID.",
      erro: error.message,
    });
  }
};

module.exports = {
  listarClientes,
  buscarClientePorId,
};
