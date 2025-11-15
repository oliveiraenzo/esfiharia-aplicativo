import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // --- GERAL ---
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  scrollContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#282828',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 5,
    marginBottom: 10,
  },

  // --- HEADER ---
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1c1c1c',
    borderBottomWidth: 1,
    borderBottomColor: '#444444',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  // --- FORMULÁRIO DE ENDEREÇO ---
  input: {
    backgroundColor: '#444444',
    color: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 10,
  },

  // --- PAGAMENTO ---
  paymentButton: {
    backgroundColor: '#444444',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  paymentButtonSelected: {
    backgroundColor: '#FF6347', // Cor de destaque
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  paymentButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // --- RESUMO DO PEDIDO ---
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  totalLabel: {
    color: '#CCCCCC',
    fontSize: 16,
  },
  totalValue: {
    color: '#CCCCCC',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#444444',
    marginVertical: 10,
  },
  totalLabelFinal: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValueFinal: {
    color: '#FFD700', // Dourado
    fontSize: 18,
    fontWeight: 'bold',
  },

  // --- RODAPÉ (Botão) ---
  footerContainer: {
    backgroundColor: '#1c1c1c',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#444444',
  },
  confirmButton: {
    backgroundColor: '#28a745', // Verde
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;