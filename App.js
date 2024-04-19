import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha seu nível de treino</Text>
      <StatusBar style="auto" />
      <ImageBackground source={require('./assets/fotinhaIniciante.png')} style={styles.blocoIniciante}>
        <Text style={styles.textIniciante}>Iniciante</Text>
      </ImageBackground>
      <View style={styles.blocoIniciante}>
        <Text style={styles.textIniciante}>Intermediário</Text>
      </View>
      <View style={styles.blocoIniciante}>
        <Text style={styles.textIniciante}>Avançado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  blocoIniciante: {
  
  },  
  textIniciante: {
    color: '#FFFFFF',
  }
});
