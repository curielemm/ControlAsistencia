import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const MenuScreen = ({ navigation }) => {
  const handleAttendeesList = () => {
    // Navegar a la pantalla de lista de asistentes
    navigation.navigate('AttendeesList');
  };

  const handleCheckAttendance = () => {
    // Navegar a la pantalla de verificar asistencia
    navigation.navigate('CheckAttendance');
  };

  const handleLogout = () => {
    // Realizar acciones de cierre de sesión
    // Por ejemplo, borrar el token de autenticación, limpiar el estado, etc.
    // Luego, navegar a la pantalla de inicio de sesión y realizar un reset de la navegación
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionButton} onPress={handleAttendeesList}>
        <Text style={styles.optionText}>Consultar lista de asistentes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleCheckAttendance}>
        <Text style={styles.optionText}>Verificar asistencia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default MenuScreen;
