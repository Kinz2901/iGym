import { View, Text, StyleSheet } from "react-native";
import listExercicios from "../../../../pernaOmbro.json";
import BlocoExercicio from "./Exercício/blocoExercicios";

export default function PernaOmbro({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Perna e Ombro</Text>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "80%",
  },
  title: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 20,
  },
  blocos: {
    width: "100%",
    gap: 20,
    alignItems: "center"
  }
});
