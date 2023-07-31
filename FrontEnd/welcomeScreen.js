import React from 'react';
import { StyleSheet, ImageBackground, Text, View,TouchableOpacity} from 'react-native';
import { AuthProvider } from './AuthContext';

const WelcomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    // Lógica para el manejo del evento de presionar el botón
    console.log('Se presionó el botón Iniciar Sesión');
    navigation.navigate('Login');
  };
  return (
    <AuthProvider>
    <ImageBackground
      source={require('./assets/a3.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      <View style={styles.container}>
        <Text style={styles.text}>¡Bienvenido!</Text>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Alinea el contenido en la parte superior
    paddingTop: 200, // Ajusta el espacio superior según tus necesidades
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 350,
  },
  buttonContainer: {
    marginTop: 5000,
  },
  button: {
    backgroundColor: '#002244',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WelcomeScreen;
