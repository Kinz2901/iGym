import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Link } from '@react-navigation/native';

export default function Divisao({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Divisão de treino básica</Text>
      <Text style={styles.titulo}>Escolha seu treino</Text>
      <StatusBar style="auto" />
      <View style={styles.blocos}>
        <Link to="/costaBiceps">
          <ImageBackground
            borderRadius={12}
            source={require("../../assets/costasBiceps.png")}
            resizeMode="cover"
            style={styles.bloco}
          >
            <Text style={styles.textIniciante}>Costas e bíceps</Text>
          </ImageBackground>
        </Link>
        <Link to="/peitoTriceps">
          <ImageBackground
            borderRadius={12}
            source={require("../../assets/peitoTriceps.jpg")}
            resizeMode="cover"
            style={styles.bloco}
          >
            <Text style={styles.textIniciante}>Peito e tríceps</Text>
          </ImageBackground>
        </Link>
        <Link to="/pernaOmbro">
          <ImageBackground
            borderRadius={12}
            source={require("../../assets/pernaOmbro.jpg")}
            resizeMode="cover"
            style={styles.bloco}
          >
            <Text style={styles.textIniciante}>Perna e ombro</Text>
          </ImageBackground>
        </Link>
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
    fontSize: 26,
  },
});