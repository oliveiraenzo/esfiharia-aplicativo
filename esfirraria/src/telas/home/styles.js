import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // --- GERAL ---
  container: {
    flex: 1,
    backgroundColor: '#333333', // Fundo escuro para o app
  },
  
  // --- HEADER ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1c1c1c', // Cor do header mais escura
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cartIconContainer: {
    position: 'relative',
    padding: 5,
  },
  cartIcon: {
    width: 28,
    height: 28,
    tintColor: '#FFFFFF', // Cor do ícone do carrinho
  },
  cartBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FF6347', // Cor de destaque para o contador
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // --- FILTRO DE CATEGORIA ---
  categoryFilterContainer: {
    paddingVertical: 10,
    backgroundColor: '#282828', // Fundo para as categorias
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#444444', // Cor padrão do botão de categoria
    marginHorizontal: 5,
  },
  selectedCategoryButton: {
    backgroundColor: '#FF6347', // Cor do botão de categoria selecionado
  },
  categoryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // --- CARROSSEL "MAIS PEDIDOS" ---
  carouselBackgroundContainer: {
    backgroundColor: '#282828', // Fundo do bloco
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
    paddingBottom: 10, 
  },
  carouselTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 15,   
    marginTop: 15,    
    marginBottom: 10, 
  },
  carouselListContainer: {
    paddingLeft: 15, 
    paddingRight: 5,
  },
  carouselItemContainer: {
    backgroundColor: '#333333', // Cor de fundo do app, para destacar
    borderRadius: 8, 
    padding: 10,
    marginRight: 10, 
    alignItems: 'center',
    width: 130, 
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  carouselItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8, 
    marginBottom: 10,
    backgroundColor: '#444444',
  },
  carouselItemName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  carouselItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFD700', // Cor dourada
    marginTop: 5,     
  },

  // --- LISTA DE PRODUTOS PRINCIPAL ---
  productList: {
    paddingHorizontal: 15, // Alinhado com o header (15)
    paddingTop: 10,
  },
  productItem: {
    flexDirection: 'row',
    backgroundColor: '#282828',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  productDescription: {
    fontSize: 13,
    color: '#CCCCCC',
    marginVertical: 2,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', // Dourado para o preço
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#28a745', // Verde para o botão "Adicionar"
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },searchContainer: {
    backgroundColor: '#282828', // Mesmo fundo dos outros blocos
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  searchInput: {
    backgroundColor: '#444444', // Fundo um pouco mais claro
    color: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
  },
});

export default styles;