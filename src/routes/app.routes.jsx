import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../app/home";
import Nivel from "../app/nivel";
import Iniciante from "../app/Iniciante/iniciante";
import Intermediario from "../app/Intermediário/intermediario";
import Avancado from "../app/Avançado/avancado";
import Teste from "../app/Iniciante/Treinos/costasBiceps";
import CostaBicepsIni from "../app/Iniciante/Treinos/costasBiceps";
import CostaBicepsInt from "../app/Intermediário/Treinos/costasBiceps";
import PeitoTricepsIni from "../app/Iniciante/Treinos/peitoTriceps";
import PeitoTricepsInt from "../app/Intermediário/Treinos/peitoTriceps";
import PernaOmbroIni from "../app/Iniciante/Treinos/pernaOmbro";
import PernaInt from "../app/Intermediário/Treinos/pernas";
import OmbroInt from "../app/Intermediário/Treinos/ombros";
import CostasAv from "../app/Avançado/Treinos/costas";
import PeitoAv from "../app/Avançado/Treinos/peito";
import BicepsTricepsAv from "../app/Avançado/Treinos/bicepsTriceps";
import OmbrosAv from "../app/Avançado/Treinos/ombros";
import QuadricepsAv from "../app/Avançado/Treinos/quadriceps";
import PosteriorAv from "../app/Avançado/Treinos/posterior";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="nivel" component={Nivel} />
      <Screen name="teste" component={Teste} />
      <Screen name="iniciante" component={Iniciante} />
      <Screen name="intermediario" component={Intermediario} />
      <Screen name="avancado" component={Avancado} />
      <Screen name="costaBicepsIni" component={CostaBicepsIni} />
      <Screen name="peitoTricepsIni" component={PeitoTricepsIni} />
      <Screen name="pernaOmbroIni" component={PernaOmbroIni} />
      <Screen name="costaBicepsInt" component={CostaBicepsInt} />
      <Screen name="peitoTricepsInt" component={PeitoTricepsInt} />
      <Screen name="pernaInt" component={PernaInt} />
      <Screen name="ombroInt" component={OmbroInt} />
      <Screen name="costasAv" component={CostasAv} />
      <Screen name="peitoAv" component={PeitoAv} />
      <Screen name="bicepsTricepsAv" component={BicepsTricepsAv} />
      <Screen name="ombrosAv" component={OmbrosAv} />
      <Screen name="quadricepsAv" component={QuadricepsAv} />
      <Screen name="posteriorAv" component={PosteriorAv} />
    </Navigator>
  );
}
