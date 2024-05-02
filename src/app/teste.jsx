import { View, Text, } from "react-native"

const exercicios = {
  exercicioUm: {
    name: "puxada alta",
  },
  exercicioDois: {
    name: "Remada baixa",
  },
  exercicioTres: {
    name: "Remada unilateral (serrote)", 
  },
  exercicioQuatro: {
    name: "Rosca direta na polia",
  },
  exercicioCinco: {
    name: "Rosca concentrada",
  }
}

export default function Teste({ navigation }) {
  return (
    <View>
      <Text>teste</Text>
    </View>
  )
}