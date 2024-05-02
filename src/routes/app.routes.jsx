import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../app/home";
import Nivel from "../app/nivel";
import Iniciante from "../app/Iniciante/iniciante";
import Teste from "../app/Iniciante/Treinos/costasBiceps";
import PernaOmbro from "../app/Iniciante/Treinos/pernaOmbro";
import PeitoTriceps from "../app/Iniciante/Treinos/peitoTriceps";
import CostaBiceps from "../app/Iniciante/Treinos/costasBiceps";


const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="nivel" component={Nivel} />
      <Screen name="teste" component={Teste} />
      <Screen name="iniciante" component={Iniciante} />
      <Screen name="costaBiceps" component={CostaBiceps} />
      <Screen name="peitoTriceps" component={PeitoTriceps} />
      <Screen name="pernaOmbro" component={PernaOmbro} />
    </Navigator>
  );
}
