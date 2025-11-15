const Product = require('../models/product'); // 1. Importa o "Model"

// --- Controlador para CRIAR um novo produto ---
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: 'Nenhuma imagem foi enviada.' });
    }
    
    // Salva o caminho local (ex: 'uploads/123456.png')
    const imageUrl = req.file.path.replace(/\\/g, "/");

    const product = new Product({
      name,
      description,
      price,
      category,
      imageUrl: imageUrl // Salva o CAMINHO no banco
    });

    await product.save();
    res.status(201).json(product);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- Controlador para BUSCAR todos os produtos ---
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    
    // --- CORREÇÃO APLICADA AQUI ---
    const productsWithFullUrl = products.map(product => {
      const productObject = product.toObject(); 

      // Se a imageUrl NÃO for uma URL completa (ex: 'uploads/123.png')
      // Então, nós montamos a URL completa.
      if (productObject.imageUrl && !productObject.imageUrl.startsWith('http')) {
        productObject.imageUrl = `${req.protocol}://${req.get('host')}/${productObject.imageUrl}`;
      }
      
      // Se ela JÁ começar com 'http' (como o nosso placeholder),
      // o código não faz nada e envia a URL original.

      return productObject;
    });

    res.status(200).json(productsWithFullUrl);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};