import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../app/home"
import Nivel from '../app/nivel';

const Tab = createBottomTabNavigator()

export default function TabRoutes(){
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={Home}
      />
      <Tab.Screen
        name="nivel"
        component={Nivel}
      />
    </Tab.Navigator>
  )
}