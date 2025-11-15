const express = require('express');
const router = express.Router();

// 1. Importa o Controlador (que contém a lógica de negócio)
const productController = require('../controllers/productController');

// 2. Importa o Middleware de Upload (Multer, para as imagens)
const uploadImage = require('../middleware/uploadImage.js');

// --- Definição das Rotas de Produtos ---

// Rota 1: GET /products
// - Quando o app React Native fizer uma requisição GET para "http://SEU_IP:3000/products",
// - o Express irá executar a função 'getAllProducts' do nosso controlador.
router.get(
    '/', 
    productController.getAllProducts
);

// Rota 2: POST /products
// - Quando o app fizer uma requisição POST para "http://SEU_IP:3000/products",
// - o Express primeiro executa o middleware 'uploadImage' para salvar a imagem.
// - Em seguida, ele executa a função 'createProduct' do controlador.
router.post(
  '/',
  uploadImage.single('image'), // 'image' é a chave (name) que o React Native deve usar ao enviar o form-data
  productController.createProduct 
);

module.exports = router;