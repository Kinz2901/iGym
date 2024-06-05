import { View, Text, StatusBar, StyleSheet, Image } from "react-native";
import { Link } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite';

function openDatabase() {
  const db = SQLite.openDatabase("igym-database.db");
  return db;
}

const db = openDatabase();

const getExercideName = () => {
  return "EXERCISE";
}

export default function Home({ navigation }) {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists Exercises  (Name TEXT primary key, Image TEXT, Series TEXT, Description TEXT"
    )
  })

  var hasName = false;
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT Name from Exercises",
      [],
      (tx, results) => {
        var len = results.rows.length;
        if (len > 0) {
          console.log("existe um exercicio adicionado")
          hasName = true;
        }
        else{
          console.log('sem exercicio');
        }
      }
    )
  })
  if(hasName == false) {
    db.transaction((tx) => {
      tx.executeSql("insert into Exercises (Name, Image, Series, Description) values (?, ?, ?, ?);", ['exercise', 'exerciseImg', '4 de 12 - 15', 'desc'])
    })
  }


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/haltere.png")}
        resizeMode="cover"
        style={styles.haltere}
      ></Image>
      <Text style={styles.title}>iGym</Text>
      <Text style={styles.desc}>Bem vindo ao seu app de treino.</Text>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Link to="/nivel" style={styles.button}>
        COMEÇE JÁ!
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#424242",
    alignItems: "center",
  },
  haltere: {
    marginTop: 180,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
  },
  desc: {
    marginTop: 20,
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#FFFFFF",
    margin: 10,
    padding: 12,
    borderRadius: 50,
    fontWeight: "bold",
    color: "#424242",
    marginTop: 20,
  },
});
