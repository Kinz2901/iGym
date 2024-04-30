import { View, Text, StatusBar, Button, StyleSheet } from "react-native"

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iGym</Text>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{ color: '#fff' }}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('nivel')}
        color="#fff"
      />
      <Button
        title="Next screen"
        onPress={() => navigation.navigate('divisao')}
        color="#fff"
      />
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
  }
})