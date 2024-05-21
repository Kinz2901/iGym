import { View, Text, StyleSheet, ScrollView } from "react-native";
import listExercicios from "../../../../Listas de treinos intermediário/costasBicepsInt.json";
import BlocoExercicio from "../../Exercício/blocoExercicios";

export default function CostaBicepsInt({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Costas e Bícep</Text>
        <View style={styles.blocos}>
          {listExercicios.map((exercicio) => (
            <BlocoExercicio
              key={exercicio.name}
              name={exercicio.name}
              image={exercicio.image}
              series={exercicio.series}
              descricao={exercicio.descricao}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
    alignItems: "center",
  },
  content: {
    width: "80%",
    marginBottom: 60,
  },
  title: {
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 60,
    marginBottom: 20,
  },
  blocos: {
    width: "100%",
    gap: 20,
    alignItems: "center"
  }
});
