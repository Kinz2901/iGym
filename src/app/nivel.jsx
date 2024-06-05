import { Link } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import * as SQLite from 'expo-sqlite';

function openDatabase() {
  const db = SQLite.openDatabase("igym-database.db");
  return db;
}

const db = openDatabase();

function saveExercise() {
  alert("Exercício salvo!")
}

function deleteExercise() {
  alert("Exercício excluído!")
}

export default function Nivel({ navigation }) {
db.transaction((tx) => {
  tx.executeSql(
    "SELECT Name, Image, Series, Description from Exercises", 
    [],
    (tx, results) => {
      var len = results.rows.length;
      if (len > 0) {
        console.log('Name: ' + results.rows.item(0).Name)
        console.log('Image: ' + results.rows.item(0).Image)
        console.log('Series: ' + results.rows.item(0).Series)
        console.log('Description: ' + results.rows.item(0).Description)
      }
      else {
        console.log('sem exercício')
      }
    }, 
  )
})

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha seu nível de treino</Text>
      <StatusBar style="auto" />
      <View style={styles.blocos}>
        <Link to="/iniciante">
          <ImageBackground
            borderRadius={12}
            source={require("../assets/iniciante.png")}
            resizeMode="cover"
            style={styles.bloco}
          >
            <Text style={styles.text}>Iniciante</Text>
          </ImageBackground>
        </Link>
        <Link to="/intermediario">
          <ImageBackground
            borderRadius={12}
            source={require("../assets/intermediario.jpg")}
            resizeMode="cover"
            style={styles.bloco}
          >
            <Text style={styles.text}>Intermediário</Text>
          </ImageBackground>
        </Link>
        <Link to="/avancado">
          <ImageBackground
            borderRadius={12}
            source={require("../assets/avancado.png")}
            resizeMode="cover"
            style={styles.bloco}
          >
            <Text style={styles.text}>Avançado</Text>
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
  text: {
    color: "#FFFFFF",
    fontSize: 40,
  },
  button: {
    padding: 100,
  }
});
