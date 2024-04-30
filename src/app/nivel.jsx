import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";

export default function Nivel({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha seu nível de treino</Text>
      <StatusBar style="auto" />
      <View style={styles.blocos}>
        <Button title="Intermediário" onPress={() => navigation.navigate('divisao')}>
          <ImageBackground
            borderRadius={12}
            source={require("../assets/iniciante.png")}
            resizeMode="cover"
            style={styles.bloco}
          >
            <Text style={styles.textIniciante}>Intermediário</Text>
          </ImageBackground>
        </Button>
        <ImageBackground
          borderRadius={12}
          source={require("../assets/intermediario.jpg")}
          resizeMode="cover"
          style={styles.bloco}
        >
          <Text style={styles.textIniciante}>Intermediário</Text>
        </ImageBackground>
        <ImageBackground
          borderRadius={12}
          source={require("../assets/avancado.png")}
          resizeMode="cover"
          style={styles.bloco}
        >
          <Text style={styles.textIniciante}>Avançado</Text>
        </ImageBackground>
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
  titulo: {
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom: 40,
  },
  blocos: {
    gap: 20,
  },
  bloco: {
    width: 300,
    height: 150,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#F3F3F3",
  },
  textIniciante: {
    color: "#FFFFFF",
    fontSize: 40,
  },
});