import React, { useState } from 'react';
import Home from './src/telas/home';
import Carregamento from './src/telas/carregamento';
import Carrinho from './src/telas/carrinho';
import FinalizarCompra from './src/telas/finalizarcompra';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // Se o item já existe, aumenta a quantidade
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Se for um novo item, adiciona ao carrinho com quantidade 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carregamento" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Carregamento" component={Carregamento} />
        
        <Stack.Screen name="Home">
          {props => <Home {...props} cartItems={cartItems} handleAddToCart={handleAddToCart} />}
        </Stack.Screen>

        <Stack.Screen name="Carrinho">
          {props => <Carrinho {...props} cartItems={cartItems} setCartItems={setCartItems} />}
        </Stack.Screen>

        <Stack.Screen name="FinalizarCompra">
          {props => <FinalizarCompra {...props} cartItems={cartItems} setCartItems={setCartItems} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
