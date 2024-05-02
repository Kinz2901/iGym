import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../app/home";
import Nivel from "../app/nivel";
import Divisao from "../app/divisao";
import Teste from "../app/teste";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="nivel" component={Nivel} />
      <Screen name="teste" component={Teste} />
      <Screen name="divisao" component={Divisao} />
    </Navigator>
  );
}
