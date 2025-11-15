import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StatusBa, Text, StatusBar } from 'react-native';
import styles from './styles';
import Logo from '../../../assets/img/logo.png'; 
 

// teste
const Carregamento = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />
      
      <Image
        source={Logo}
        style={styles.logo}
      />
      <Text style={{color:'#fff', marginTop:20, fontSize:18, fontWeight:'bold'}}>Mundo Árabe, a melhor e maior MEGA ESFIHA da Região.</Text>
      
      <ActivityIndicator size="large" color="#FFFFFF" style={styles.spinner} />
    </View>
  );
};

export default Carregamento;