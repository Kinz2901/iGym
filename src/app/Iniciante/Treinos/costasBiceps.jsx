import { View, Text } from "react-native";
import listExercicios from "../../../../listaexercicios.json";
import BlocoExercicio from "./Bloco Exercício/blocoExercicios";

export default function CostaBiceps({ navigation }) {
  return (
    <View>
      <Text>costaBiceps</Text>
      {listExercicios.map((exercicio) => (
        <BlocoExercicio key={exercicio.name} name={exercicio.name} image={exercicio.image}/>
      ))}
    </View>
  );
}
