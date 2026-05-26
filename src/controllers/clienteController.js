// src/controllers/clienteController.js

const Cliente = require("../model/cliente");
const clientes = require("../data/clientes");

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
//PUT /

const adicionarCliente = async(req, res) => {
  try{
    const {nome, telefone, endereco } = req.body;
    const novo_cliente = new Cliente(
      clientes.length + 1,
      nome,
      telefone,
      endereco
    );
    clientes.push(novo_cliente);
    return res.status(201).json({
      sucesso: true,
      mensagem: "Usuario adicionado"
    });

  }catch(error){
    return res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao adicionar",
      erro: error.message
    });
  }
}

// PUT /Clientes/:id - Atualiza cliente pelo id:

const atualizarCliente = async (req, res) => {
  try{
    const {id} = req.params;
    const {nome, telefone, endereco} = req.body
    const cliente = clientes.find((c) => c.id == id);
    if(!cliente){
      return res.status(404).json({
        sucesso: false,
        messagem: `Clientes de id $(id) não encontrado`
      });
    } else {
      cliente.nome = nome;
      cliente.telefone = telefone;
      cliente.endereco = endereco;

      return res.status(200).json({
        sucesso: true,
        mensagem: "Cliente atualizado"
      })
    }
  }catch(error){
    return res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar cliente",
      erro: error.message
    })
  }
}

// DELETE /clientes,js/:id - remove um cliente pelo id

const deletarCliente = async(req, res) => {
  try{
    const {id} = req.params;
    const index = clientes.findIndex((c) => c.id == id);

    if(index === -1){
      return res.status(404).json({
        sucesso: false,
        mensagem: `Cliente de ${id} não encontrado`
      })
    } else {
      clientes.splice(index, 1);
      return res.status(200).json({
        sucesso: true,
        mensagem: `cliente com ${id} removido com sucesso`
      });
    }
  }catch(error) {
    return res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao remover cliente",
      erro: error.message
    })
  }
}

module.exports = {
  listarClientes,
  buscarClientePorId,
  adicionarCliente,
  atualizarCliente,
  deletarCliente
};
