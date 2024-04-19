import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha seu nível de treino</Text>
      <StatusBar style="auto" />
      <View style={styles.blocos}>
        <ImageBackground source={require('./assets/iniciante.png')} style={styles.bloco}>
          <Text style={styles.textIniciante}>Iniciante</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/intermediario.jpg')} style={styles.bloco}>
          <Text style={styles.textIniciante}>Intermediário</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/avancado.png')} style={styles.bloco}>
          <Text style={styles.textIniciante}>Avançado</Text>
        </ImageBackground>
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
    marginBottom: 40,
  },
  blocos: {
    gap: 20,
  },
  bloco: {
    width: 300,
    height: 150,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },  
  textIniciante: {
    color: '#FFFFFF',
    fontSize: 40,
  }
});
