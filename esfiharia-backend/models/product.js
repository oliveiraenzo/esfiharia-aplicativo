const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Este é o "Model" (M) do MVC.
// Ele define a ESTRUTURA (o "molde") de como um Produto
// deve ser salvo no banco de dados MongoDB.

const productSchema = new Schema(
  {
    // Campo para o nome (ex: "Mega esfiha de carne")
    name: {
      type: String,
      required: true // O campo é obrigatório
    },

    // Campo para a descrição
    description: {
      type: String,
      required: true
    },

    // Campo para o preço
    price: {
      type: Number,
      required: true
    },

    // Campo para a categoria (ex: "Salgadas", "Doces", "Bebidas")
    category: {
      type: String,
      required: true
    },

    // Campo para a imagem
    // Armazenamos APENAS o caminho do arquivo (ex: "uploads/123456.png")
    // O servidor irá transformar isso em uma URL completa
    imageUrl: {
      type: String,
      required: true
    }

    // O campo 'imageMimeType' FOI REMOVIDO DAQUI
  },
  {
    timestamps: true 
  }
);

// Exporta o modelo
module.exports = mongoose.model('Product', productSchema);