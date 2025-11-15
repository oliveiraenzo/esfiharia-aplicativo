import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  StatusBar 
} from 'react-native';
import styles from './styles'; // Importa os estilos locais

const FinalizarCompra = ({ navigation, route, setCartItems }) => {
  // 1. Recebe os dados da tela do Carrinho
  // O 'total' é recalculado aqui para segurança
  const { cartItems } = route.params;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // 2. Estados para os campos do formulário
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState(null); // 'Dinheiro', 'Cartão', 'Pix'
  const [taxaEntrega] = useState(5.00); // Taxa fixa de exemplo

  // 3. Função para simular a finalização do pedido
  const handleConfirmarPedido = () => {
    // Validação básica
    if (!endereco || !bairro || !numero) {
      Alert.alert('Erro', 'Por favor, preencha seu endereço completo (Endereço, Bairro e Número).');
      return;
    }
    if (!metodoPagamento) {
      Alert.alert('Erro', 'Por favor, selecione um método de pagamento.');
      return;
    }

    // --- LÓGICA DO PEDIDO (SIMULAÇÃO) ---
    // Aqui você enviaria os dados (cartItems, total, endereco, metodoPagamento)
    // para o seu backend ou para uma API (como a do WhatsApp).
    console.log('--- PEDIDO CONFIRMADO ---');
    console.log('Total:', total + taxaEntrega);
    console.log('Endereço:', `${endereco}, ${numero}, ${bairro} (${complemento})`);
    console.log('Pagamento:', metodoPagamento);
    // console.log('Itens:', JSON.stringify(cartItems));
    // --- FIM DA SIMULAÇÃO ---

    Alert.alert(
      'Pedido Confirmado!',
      'Seu pedido foi enviado para a cozinha. Obrigado pela preferência!',
      [
        { text: 'OK', onPress: () => {
          // Limpa o carrinho
          setCartItems([]);
          // Volta para a tela inicial
          navigation.navigate('Home'); 
        }}
      ]
    );
  };

  const totalFinal = total + taxaEntrega;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 5, width: 60 }}>
          <Text style={{ color: 'white', fontSize: 18 }}>{'< Voltar'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Finalizar Pedido</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* --- 1. Seção de Endereço --- */}
        <Text style={styles.sectionTitle}>Endereço de Entrega</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Endereço (Ex: Rua das Flores)"
            placeholderTextColor="#888"
            value={endereco}
            onChangeText={setEndereco}
          />
          <View style={{ flexDirection: 'row' }}>
            <TextInput
              style={[styles.input, { flex: 2, marginRight: 10 }]}
              placeholder="Bairro"
              placeholderTextColor="#888"
              value={bairro}
              onChangeText={setBairro}
            />
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Nº"
              placeholderTextColor="#888"
              value={numero}
              onChangeText={setNumero}
              keyboardType="numeric"
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Complemento (Apto, Bloco, etc.)"
            placeholderTextColor="#888"
            value={complemento}
            onChangeText={setComplemento}
          />
        </View>

        {/* --- 2. Seção de Pagamento --- */}
        <Text style={styles.sectionTitle}>Forma de Pagamento</Text>
        <View style={styles.card}>
          <TouchableOpacity 
            style={[styles.paymentButton, metodoPagamento === 'Dinheiro' && styles.paymentButtonSelected]}
            onPress={() => setMetodoPagamento('Dinheiro')}
          >
            <Text style={styles.paymentButtonText}>Dinheiro</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.paymentButton, metodoPagamento === 'Cartão' && styles.paymentButtonSelected]}
            onPress={() => setMetodoPagamento('Cartão')}
          >
            <Text style={styles.paymentButtonText}>Cartão (na entrega)</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.paymentButton, metodoPagamento === 'Pix' && styles.paymentButtonSelected]}
            onPress={() => setMetodoPagamento('Pix')}
          >
            <Text style={styles.paymentButtonText}>Pix</Text>
          </TouchableOpacity>
        </View>
        
        {/* --- 3. Resumo do Pedido --- */}
        <Text style={styles.sectionTitle}>Resumo</Text>
        <View style={styles.card}>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalValue}>R$ {total.toFixed(2).replace('.', ',')}</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Taxa de Entrega</Text>
            <Text style={styles.totalValue}>R$ {taxaEntrega.toFixed(2).replace('.', ',')}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.totalLabelFinal}>Total a Pagar</Text>
            <Text style={styles.totalValueFinal}>R$ {totalFinal.toFixed(2).replace('.', ',')}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Rodapé com o Botão de Confirmar */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmarPedido}>
          <Text style={styles.confirmButtonText}>Confirmar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FinalizarCompra;