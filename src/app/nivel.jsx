import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function Nivel({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha seu nível de treino</Text>
      <StatusBar style="auto" />
      <View style={styles.blocos}>
        <ImageBackground
          borderRadius={12}
          source={require("../assets/iniciante.png")}
          resizeMode="cover"
          style={styles.bloco}
        >
          
          <Text style={styles.text}>Iniciante</Text>
        </ImageBackground>
        <ImageBackground
          borderRadius={12}
          source={require("../assets/intermediario.jpg")}
          resizeMode="cover"
          style={styles.bloco}
        >
          <Text style={styles.text}>Intermediário</Text>
        </ImageBackground>
        <ImageBackground
          borderRadius={12}
          source={require("../assets/avancado.png")}
          resizeMode="cover"
          style={styles.bloco}
        >
          <Text style={styles.text}>Avançado</Text>
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
  text: {
    color: "#FFFFFF",
    fontSize: 40,
  },
  button: {
    padding: 100,
  }
});
