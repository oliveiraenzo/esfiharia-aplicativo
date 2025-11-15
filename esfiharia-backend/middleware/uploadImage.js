const multer = require('multer');
const path = require('path');


// Configuração de armazenamento do Multer em memória
const storage = multer.memoryStorage();

// Filtro de arquivo para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const mimeType = allowedTypes.test(file.mimetype);
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if (mimeType && extName) {
    return cb(null, true);
  }
  cb('Erro: O tipo de arquivo não é suportado! Apenas imagens (jpeg, jpg, png, gif) são permitidas.');
};

// Cria a instância do Multer com as configurações
const upload = multer({
  storage: storage,
  limits: {
    // Limite de 5MB por arquivo
    fileSize: 5 * 1024 * 1024 
  },
  fileFilter: fileFilter
});

module.exports = upload;
