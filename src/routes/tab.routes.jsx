import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from "@expo/vector-icons"

import Home from "../app/home"
import Nivel from '../app/nivel';
import Divisao from '../app/divisao';

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="nivel"
        component={Nivel}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="divisão"
        component={Divisao}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}