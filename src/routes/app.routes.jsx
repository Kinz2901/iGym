import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../app/home";
import Nivel from "../app/nivel";
import Iniciante from "../app/Iniciante/iniciante";
import Intermediario from "../app/Intermediário/intermediario";
import Teste from "../app/Iniciante/Treinos/costasBiceps";
import CostaBicepsIni from "../app/Iniciante/Treinos/costasBiceps";
import CostaBicepsInt from "../app/Intermediário/Treinos/costasBiceps";
import PeitoTricepsIni from "../app/Iniciante/Treinos/peitoTriceps";
import PeitoTricepsInt from "../app/Intermediário/Treinos/peitoTriceps";
import PernaOmbroIni from "../app/Iniciante/Treinos/pernaOmbro";
import PernaOmbroInt from "../app/Intermediário/Treinos/pernaOmbro";


const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="nivel" component={Nivel} />
      <Screen name="teste" component={Teste} />
      <Screen name="iniciante" component={Iniciante} />
      <Screen name="intermediario" component={Intermediario} />
      <Screen name="costaBicepsIni" component={CostaBicepsIni} />
      <Screen name="peitoTricepsIni" component={PeitoTricepsIni} />
      <Screen name="pernaOmbroIni" component={PernaOmbroIni} />
      <Screen name="costaBicepsInt" component={CostaBicepsInt} />
      <Screen name="peitoTricepsInt" component={PeitoTricepsInt} />
      <Screen name="pernaOmbroInt" component={PernaOmbroInt} />
    </Navigator>
  );
}
