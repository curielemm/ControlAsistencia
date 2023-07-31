import React, { useState,useContext } from "react";
import { AuthContext } from './AuthContext';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Modal,
} from "react-native";
import ApiService from "./ApiService";
const LoginScreen = ({ navigation }) => {
  const { isLoggedIn,setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const closeModal = () => {
    setIsErrorModalVisible(false);
  };

  //
  const handleLogin = async () => {
    try {
      if (!validateEmail(email)) {
        setIsEmailValid(false);
        return;
      }
      const response = await ApiService.login(email, password);

      if (response.success) {
        setIsLoggedIn(true); 
        console.log("Exitooo" + response);
        navigation.navigate('Menu');
      }else{
        setErrorMessage("Email o Contraseña Invalidos")
        setIsErrorModalVisible(true);
      }
    
    } catch (error) {
      if (error.response?.data?.error) {
        console.log('Error de inicio de sesión3:', error.response.data.error);
        console.log(error.response.data.error);
      } else {
        //console.log('Error de inicio de sesión4:', error.message);
        console.log("errors:" + error)
        setErrorMessage(error.message);
      }
      setIsErrorModalVisible(true);
    }
  };

  const validateEmail = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/jnmex.jpg")} style={styles.logo} />
      </View>
      <Text style={styles.text}>Inicio de Sesión</Text>
      <TextInput
        style={[styles.input, !isEmailValid && styles.inputError]}
        placeholder="Correo electrónico"
        onChangeText={(text) => {
          setEmail(text);
          setIsEmailValid(true);
        }}
        value={email}
      />
      {!isEmailValid && (
        <Text style={styles.errorText}>
          Por favor, ingrese un correo electrónico válido
        </Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Modal visible={isErrorModalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Error de inicio de sesión:</Text>
          <Text style={styles.modalText}>{errorMessage}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-start", // Alineación en la parte superior
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#002244",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 350,
    height: 100,
  },
  inputError: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  modalButton: {
    backgroundColor: '#002244',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  
});

export default LoginScreen;
