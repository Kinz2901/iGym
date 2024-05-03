import { View, Text, StyleSheet } from "react-native";
import listExercicios from "../../../../listaexercicios.json";
import BlocoExercicio from "./Exercício/blocoExercicios";

export default function CostaBiceps({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>costaBiceps</Text>
      <View style={styles.blocos}>
        {listExercicios.map((exercicio) => (
          <BlocoExercicio
            key={exercicio.name}
            name={exercicio.name}
            image={exercicio.image}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
    alignItems: "center",
    justifyContent: "center",
  },
  blocos: {
    width: "100%",
    gap: 20,
    alignItems: "center"
  }
});
