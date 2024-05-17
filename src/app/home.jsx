import { View, Text, StatusBar, StyleSheet } from "react-native"
import { Link } from '@react-navigation/native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iGym</Text>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Link to='/nivel' style={styles.button}>
        Começe já!
      </Link>
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
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#FFFFFF",
    margin: 10,
    padding: 10,
    borderRadius: 5, 
    fontWeight: "bold",
    color: "#424242",
  }
})