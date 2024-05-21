import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Link } from "@react-navigation/native";

export default function Divisao({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.titulo}>Divisão de treino avançado</Text>
        <Text style={styles.titulo2}>Escolha seu treino</Text>
        <StatusBar style="auto" />
        <View style={styles.blocos}>
          <Link to="/costasAv">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/costasBiceps.png")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textAv}>Costas</Text>
            </ImageBackground>
          </Link>
          <Link to="/peitoAv">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/peitoTriceps.jpg")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textAv}>Peito</Text>
            </ImageBackground>
          </Link>
          <Link to="/bicepsTricepsAv">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/triceps.png")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textAv}>Biceps e Tríceps</Text>
            </ImageBackground>
          </Link>
          <Link to="/ombrosAv">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/treino-de-ombro.jpg")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textAv}>Ombros</Text>
            </ImageBackground>
          </Link>
          <Link to="/quadricepsAv">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/quadriceps.jpg")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textAv}>Quadríceps</Text>
            </ImageBackground>
          </Link>
          <Link to="/posteriorAv">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/posterior.jpg")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textAv}>Posterior de coxa</Text>
            </ImageBackground>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
    margin: "auto",
    alignItems: "center"
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 20,
    marginTop: 60,
    marginBottom: 20,
  },
  titulo2: {
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom: 20,
  },
  content: {
    width: "80%",
    marginBottom: 60,
  },
  blocos: {
    gap: 20,
    alignItems: "center",
  },
  bloco: {
    width: 300,
    height: 150,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  textAv: {
    color: "#FFFFFF",
    fontSize: 26,
  },
});
