const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;





app.use(cors());



app.use(express.json());



app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
  })
  .catch((err) => {
    console.error('Falha ao conectar ao MongoDB:', err);
  });


const productRoutes = require('./routes/product');



app.use('/products', productRoutes);


app.get('/', (req, res) => {
  res.send('API da Esfiharia (MVC com MongoDB) está no ar!');
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});