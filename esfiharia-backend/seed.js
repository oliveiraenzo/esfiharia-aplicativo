

const mongoose = require('mongoose');
const Product = require('./models/product'); 
require('dotenv').config(); 


const PLACEHOLDER_IMG = 'https://placehold.co/100x100/EFEFEF/333333?text=Esfiha';


const DUMMY_PRODUCTS = [
  
  { category: 'Salgadas', name: 'Mega esfiha de carne', description: 'Carne moída temperado com vinagrete pimenta Síria pimenta do reino tahine e vinagre', price: 9.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha carne com queijo', description: 'Carne moída temperado, e queijo mussarela', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha carne Catupiry', description: 'Carne moída temperado, com Catupiry Original', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha carne com cheddar', description: 'Carne moída temperado, e cheddar', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha carne queijo e bacon', description: 'Carne moída temperado, queijo mais e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha carne Catupiry e bacon', description: 'Carne moída temperado, Catupiry Original e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha carne cheddar e bacon', description: 'Carne moída temperado, cheddar e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha queijo', description: 'Queijo mussarela rodelas de tomate e orégano', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha dois queijos', description: 'Queijo mussarela Catupiry Original e orégano', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha três queijos', description: 'Queijo mussarela Catupiry Original queijo parmesão e orégano', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha quatro queijos', description: 'Queijo mussarela Catupiry Original cheddar queijo parmesão e orégano', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha cinco queijos', description: 'Queijo mussarela Catupiry Original cheddar queijo provolone queijo parmesão e orégano', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha calabresa', description: 'Calabresa moída temperado com tomate cebola e salsinha', price: 9.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha calabresa com queijo', description: 'Calabresa moída temperado, e queijo mussarela', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha calabresa Catupiry', description: 'Calabresa moída temperado, com Catupiry Original', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha calabresa cheddar', description: 'Calabresa moída temperado e cheddar', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha calabresa queijo e bacon', description: 'Calabresa moída temperado, com queijo mussarela e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha calabresa cheddar e bacon', description: 'Calabresa moída temperado cheddar e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha calabresa Catupiry e bacon', description: 'Calabresa moída temperado com Catupiry Original e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha de frango', description: 'Frango desfiado, temperado com cebola salsinha e especiarias', price: 9.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha frango com queijo', description: 'Frango desfiado e temperado, com queijo mussarela e orégano', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha frango com Catupiry', description: 'Frango desfiado e temperado, com Catupiry Original', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha frango com cheddar', description: 'Frango desfiado e temperado, com cheddar', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha frango queijo e bacon', description: 'Frango desfiado e temperado, com queijo mussarela e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha frango Catupiry e bacon', description: 'Frango desfiado e temperado, com Catupiry e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha frango cheddar e bacon', description: 'Frango desfiado e temperado com cheddar e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha peito de peru', description: 'Fatias de peito de peru e queijo mussarela', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha peito de peru Catupiry', description: 'Fatias de peito de peru com Catupiry Original', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha peito de peru com cheddar', description: 'Fatias de peito de peru e cheddar', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha lombo', description: 'Fatias de lombo canadense com queijo mussarela', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha lombo Catupiry', description: 'Fatias de lombo canadense com Catupiry Original', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha lombo com cheddar', description: 'Fatias de lombo canadense com cheddar', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha de brócolis', description: 'Brócolis queijo mussarela alho frito e orégano', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha brócolis Catupiry', description: 'Brócolis Catupiry Original e alho frito', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha brócolis cheddar', description: 'Brócolis cheddar e alho frito', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha brócolis queijo e bacon', description: 'Brócolis queijo mussarela bacon e alho frito', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha atum', description: 'Atum sólido temperado com tomate cebola e salsinha', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Atum com queijo', description: 'Atum sólido temperado e queijo mussarela', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha atum Catupiry', description: 'Atum sólido temperado e Catupiry Original', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Atum com cheddar', description: 'Atum sólido temperado e cheddar', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha milho', description: 'Milho verde e queijo mussarela', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha milho Catupiry', description: 'Milho verde com Catupiry Original', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha palmito', description: 'Palmito picado e queijo mussarela', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha palmito Catupiry', description: 'Palmito picado e Catupiry Original', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha berinjela', description: 'Berinjela refogada queijo mussarela e alho frito', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha berinjela bacon', description: 'Berinjela refogada queijo mussarela bacon e alho frito', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha escarola', description: 'Escarola refogada queijo mussarela alho frito e orégano', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha mundo árabe', description: 'Queijo mussarela tomate seco bacon alho frito e orégano', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha caipira', description: 'Frango desfiado e temperado milho verde e queijo mussarela', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha nordestina', description: 'Carne seca desfiada queijo coalho e orégano', price: 17.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha baiana', description: 'Calabresa moída temperado ovo cebola queijo mussarela e pimenta calabresa', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha carne seca', description: 'Carne seca desfiada cebola e queijo mussarela', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha salpicão', description: 'Frango desfiado temperado, queijo mussarela e batata palha', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha pizza', description: 'Queijo mussarela tomate azeitona e orégano', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha qualquer uma', description: 'Queijo mussarela salsicha batata palha e molho de tomate', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha bacon', description: 'Queijo mussarela e bacon', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha marguerita', description: 'Queijo mussarela molho de tomate manjericão e queijo parmesão', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha bauru', description: 'Queijo mussarela fatias de presunto tomate e orégano', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha pepperoni', description: 'Queijo mussarela pepperoni fatiado e orégano', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha pepperoni Catupiry', description: 'Pepperoni fatiado com Catupiry Original', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha pepperoni cheddar', description: 'Pepperoni fatiado com cheddar', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha meu gosto', description: 'Fatias de presunto Champions tomate e Catupiry Original', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha moda da casa', description: 'Queijo mussarela bacon alho frito e orégano', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha portuguesa', description: 'Fatias de presunto ovo milho palmito cebola queijo mussarela e orégano', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha Doritos', description: 'Queijo mussarela cheddar e Doritos', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha Catupiry', description: 'Catupiry Original e orégano', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha de ricota', description: 'Ricota temperada com azeite e salsinha', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha ricota com espinafre', description: 'Ricota temperada, com espinafre refogado e alho frito', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha camarão', description: 'Queijo mussarela camarão palmito e alho frito', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha hamburguer', description: 'dois hamburguer suculento queijo mussarela e cheddar', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha salame', description: 'Fatias bem generosa de salame, com queijo mussarela e orégano', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Salgadas', name: 'Mega esfiha costela desfiada', description: 'costela desfiada muito suculenta e saborosa, coberta com queijo mussarela', price: 16.99, imageUrl: PLACEHOLDER_IMG },

  
  { category: 'Doces', name: 'Mega esfiha Bis', description: 'Chocolate ao leite com Bis', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha Ovomaltine', description: 'Chocolate branco com Ovomaltine', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha fini', description: 'Chocolate ao com fini', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha Sonho de Valsa', description: 'Chocolate ao leite com Sonho de Valsa', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha sensação', description: 'Chocolate ao com morango', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha doces de leite', description: 'Doce de leite', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha pistache', description: 'Creme de pistache com amendoim torrado', price: 17.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha marshmallow', description: 'Chocolate ao leite com marshmallow', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha Ouro Branco', description: 'Chocolate ao leite com bombom Ouro Branco', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha banana', description: 'Banana leite condensado e canela', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha Prestígio', description: 'Chocolate ao leite e coco ralado', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha choconana', description: 'Chocolate ao leite com banana', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha Nutella sensação', description: 'Nutella Original com morango', price: 21.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha chocolate', description: 'Chocolate ao leite', price: 13.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha m.ms', description: 'Chocolate ao com m.ms', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha churros', description: 'Doce de leite açúcar e canela', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha brigadeiro', description: 'Chocolate ao leite e granulado', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha m.ms ll', description: 'Chocolate branco com m.ms', price: 14.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha Nutella Original', description: 'Nutella Original', price: 19.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha banana nevada', description: 'banana,chocolate branco,canela', price: 18.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha chocolate ao leite e uva', description: 'chocolate ao lite e uvas verdes', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha paçoca', description: 'doce de leite e paçoca', price: 15.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha romeu e julieta', description: 'goiabada e queijo', price: 12.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha kit kat', description: 'chocolate ao leite e bombom kitkat', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Doces', name: 'Mega esfiha de ninho com nutella', description: 'nutella com leite ninho', price: 18.99, imageUrl: PLACEHOLDER_IMG },

  
  { category: 'Refrigerantes', name: 'Coca Cola Lata 350ml', description: 'Coca lata original', price: 7.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Coca-Cola 600ml', description: 'Garrafa 600ml', price: 10.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Fanta Laranja 2l', description: 'Garrafa 2l', price: 15.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Fanta Laranja 350ml', description: 'Lata 350ml', price: 6.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Fanta Laranja 600ml', description: 'Garrafa 600ml', price: 8.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Fanta Maracujá 350ml', description: 'Lata 350ml', price: 6.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Fanta Uva 2l', description: 'Garrafa 2l', price: 15.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Fanta Uva 350ml', description: 'Lata 350ml', price: 6.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Guaraviton Açai 500ml', description: 'Garrafa 500ml', price: 5.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Refr. Guarana Antarctica 2l', description: 'Unidade 2l', price: 15.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Refrigerante Guaraná Antarctica 600ml', description: 'Unidade 600ml', price: 9.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Refrigerante Guaraná Antarctica Lata 350ml', description: 'Guaraná antártica 350ml original', price: 6.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Refrigerante Original Coca Cola 2l', description: 'Garrafa 2l', price: 16.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Suco Del Valle Frut Laranja 1l', description: 'Embalagem 1l', price: 10.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Suco Del Valle Frut Uva 1l', description: 'Garrafa 1l', price: 10.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Suco Del Valle Maracujá 290ml', description: 'Lata 290ml', price: 7.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Suco Del Valle Néctar Goiaba 290ml', description: 'Lata 290ml', price: 7.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Suco Del Valle Néctar Manga e Maçã 290ml', description: 'Lata 290ml', price: 7.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Suco Del Valle Néctar Pêssego 290ml', description: 'Lata 290ml', price: 7.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Suco Del Valle Néctar Uva 290ml', description: 'Lata 290ml', price: 7.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Agua 510 ml', description: 'Água sem gás', price: 3.00, imageUrl: PLACEHOLDER_IMG },
  { category: 'Refrigerantes', name: 'Dolly 2L', description: 'guarana, limão, laranja maça', price: 9.99, imageUrl: PLACEHOLDER_IMG },

  
  { category: 'Combos', name: 'Combo kids', description: '1 mini esfiha de doritos\n1 mini esfiha de queijo\n1 mini esfiha de nutella\n1 suco del valle 300 ml\n1 danoninho\n1 brinquedo', price: 39.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Combos', name: 'Combo casal', description: '1 esfiha de carne com queijo\n1 esfiha de frango catupiry\n1 esfiha de sensacao\n1 refrigerante 600 ml', price: 35.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Combos', name: 'Combo meu patrao', description: '1 esfiha portuguesa\n1 esfiha carne seca\n1 esfiha mundo arabe\n1 esfiha cinco queijo\n1 esfiha nutella\n1 coca cola 2 l', price: 79.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Combos', name: 'Combo da casa', description: '1 esfiha brocolis com queijo e bacon\n1 esfiha de carne com queijo e bacon\n1 esfiha escarola com mussarela\n1 esfiha lombo canadense com mussarela\n1 esfiha de peito de peru defumado\n1 esfiha banana nevada\n1 guarana 2 l', price: 89.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Combos', name: 'Combo seu jubel', description: '3 esfihas de carne com queijo\n3 esfihas de frango com catupiry\n3 esfihas calabresa com cheddar\n1 esfiha de sensacao\n1 coca cola 2 l', price: 129.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Combos', name: 'Combo economico', description: '1 esfiha de carne\n1 esfiha de queijo\n1 esfiha de frango\n1 esfiha de calabresa\n1 sfiha de chocolate\n1 dolly 2 l', price: 47.99, imageUrl: PLACEHOLDER_IMG },
  { category: 'Combos', name: 'Combo familia', description: '5 esfihas de carne com queijo\n5 esfihas de queijo mussarela\n5 esfihas de calabresa com catupiry\n5 esfihas de frango com catupiry\n2 esfihas de m.m.s\n1 coca cola 2 l\n1 guarana 2 l', price: 289.99, imageUrl: PLACEHOLDER_IMG },
];



const seedDatabase = async () => {
  try {
    
    if (!process.env.MONGODB_URI) {
      throw new Error('A variável MONGODB_URI não foi definida no arquivo .env');
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado ao MongoDB para seeding...');

    
    await Product.deleteMany({});
    console.log('Coleção "products" limpa.');

    
    await Product.insertMany(DUMMY_PRODUCTS);
    console.log(`✅ ${DUMMY_PRODUCTS.length} produtos inseridos com sucesso!`);

  } catch (error) {
    console.error('❌ Erro no script de seeding:', error.message);
  } finally {
    
    await mongoose.connection.close();
    console.log('Conexão com o MongoDB fechada.');
  }
};


seedDatabase();
