import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StatusBar } from 'react-native';
// Seus estilos estão em './styles.js'
import styles from './styles'; 

// --- Componente para um item individual no carrinho ---
const CartItem = ({ item, onUpdateQuantity }) => (
    <View style={styles.cartItemContainer}>
        {/* Usa uma imagem de placeholder (logo) se a imagem real não existir */}
        <Image 
            source={item.imageUrl ? { uri: item.imageUrl } : require('../../../assets/img/logo.png')} 
            style={styles.cartItemImage} 
        />
        
        <View style={styles.cartItemDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            {/* Formatação de preço para R$ 0,00 */}
            <Text style={styles.productPrice}>R$ {item.price.toFixed(2).replace('.', ',')}</Text>
        </View>

        {/* Seletor de Quantidade */}
        <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={() => onUpdateQuantity(item._id, item.quantity - 1)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => onUpdateQuantity(item._id, item.quantity + 1)} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
);

// --- Tela Principal do Carrinho ---
// Recebe navigation, cartItems (com valor padrão) e setCartItems
const Carrinho = ({ navigation, cartItems = [], setCartItems }) => {

    // Função para atualizar a quantidade de um item
    const handleUpdateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            // Remove o item se a quantidade for 0 ou menos
            setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
        } else {
            // Atualiza a quantidade do item específico
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item._id === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    // Calcula o valor total do carrinho
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Componente para renderizar quando o carrinho está vazio
    const renderEmptyList = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18 }}>Seu carrinho está vazio.</Text>
        </View>
    );

    // Renderiza a lista de itens do carrinho
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />
            {/* Header */}
            <View style={styles.header}>
                {/* Botão "Voltar" */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 5, width: 60 }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>{'< Voltar'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Meu Carrinho</Text>
                {/* Espaço para centralizar o título */}
                <View style={{ width: 60 }} /> 
            </View>

            {/* Lista de Itens */}
            <FlatList
                data={cartItems}
                renderItem={({ item }) => 
                    item ? <CartItem item={item} onUpdateQuantity={handleUpdateQuantity} /> : null
                }
                // Chave segura: usa _id se existir, senão usa o índice como fallback.
                keyExtractor={(item, index) => item?._id || index.toString()}
                ListEmptyComponent={renderEmptyList} // Mostra se a lista estiver vazia
                contentContainerStyle={{ padding: 10, flexGrow: 1 }} // flexGrow 1 centraliza o "vazio"
            />

            {/* Rodapé com o Total (só aparece se tiver itens) */}
            {cartItems.length > 0 && (
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total: R$ {total.toFixed(2).replace('.', ',')}</Text>
                    
                    {/* --- ALTERAÇÃO FINAL --- */}
                    {/* Botão que navega para FinalizarCompra e passa os dados */}
                    <TouchableOpacity 
                        style={styles.checkoutButton} 
                        onPress={() => navigation.navigate('FinalizarCompra', { cartItems: cartItems })}
                    >
                        <Text style={styles.checkoutButtonText}>Finalizar Compra</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default Carrinho;