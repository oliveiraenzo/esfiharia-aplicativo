import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Fundo escuro
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  spinner: {
    marginTop: 50,
  },
  text: {
    color: '#fff',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;