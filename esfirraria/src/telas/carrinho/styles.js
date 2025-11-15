import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // --- GERAL ---
  container: {
    flex: 1,
    backgroundColor: '#333333', // Fundo escuro para o app
  },

  // --- HEADER (Específico do Carrinho/Reutilizado) ---
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

  // --- ESTILOS DOS ITENS DO CARRINHO ---
  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#282828',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  cartItemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#444444', // Placeholder
  },
  cartItemDetails: {
    flex: 1,
  },

  // --- ESTILOS REUTILIZADOS (para nome e preço) ---
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFD700', // Dourado para o preço
    marginTop: 5,
  },

  // --- SELETOR DE QUANTIDADE ---
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#444',
    borderRadius: 20,
  },
  quantityButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  quantityButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },

  // --- RODAPÉ DE TOTAL E CHECKOUT ---
  totalContainer: {
    backgroundColor: '#1c1c1c',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#444444',
  },
  totalText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#28a745', // Verde
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;