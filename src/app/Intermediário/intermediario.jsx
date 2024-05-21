import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Link } from '@react-navigation/native';

export default function Divisao({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titulo}>Divisão de treino intermediária</Text>
        <Text style={styles.titulo2}>Escolha seu treino</Text>
        <StatusBar style="auto" />
        <View style={styles.blocos}>
          <Link to="/costaBicepsInt">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/costasBiceps.png")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textIntermediario}>Costas e bíceps</Text>
            </ImageBackground>
          </Link>
          <Link to="/peitoTricepsInt">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/peitoTriceps.jpg")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textIntermediario}>Peito e tríceps</Text>
            </ImageBackground>
          </Link>
          <Link to="/pernaInt">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/pernaOmbro.jpg")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textIntermediario}>Perna e ombro</Text>
            </ImageBackground>
          </Link>
          <Link to="/ombroInt">
            <ImageBackground
              borderRadius={12}
              source={require("../../assets/pernaOmbro.jpg")}
              resizeMode="cover"
              style={styles.bloco}
            >
              <Text style={styles.textIntermediario}>Ombro</Text>
            </ImageBackground>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
    alignItems: "center",
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
  textIntermediario: {
    color: "#FFFFFF",
    fontSize: 26,
  },
});