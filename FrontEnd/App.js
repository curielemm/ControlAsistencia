import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './welcomeScreen';
import LoginScreen from './loginScreen';
import MenuScreen from './menuScreen';
//import AttendeesListScreen from './AttendeesListScreen';
//import CheckAttendanceScreen from './CheckAttendanceScreen';

const Stack = createStackNavigator();

const App= ()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
       { /*<Stack.Screen name="AttendeesList" component={AttendeesListScreen} />*/
        /*<Stack.Screen name="CheckAttendance" component={CheckAttendanceScreen} />*/}
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
