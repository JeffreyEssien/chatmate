import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './screens/homepage';
import Login from './screens/login';
import Signup from './screens/signup';
import ChatBox from './screens/chatbox';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen name="Homepage" component={Homepage}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
      <Stack.Screen name="ChatMate" component={ChatBox} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
