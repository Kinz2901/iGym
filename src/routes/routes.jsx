import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "../app/home"
import Nivel from '../app/nivel';
import Divisao from '../app/divisao';

const Stack = createNativeStackNavigator();

export default function Routes(){
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="nivel" component={Nivel} />
          <Stack.Screen name="divisao" component={Divisao} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}