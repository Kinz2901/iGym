import { View, Text, Image, StyleSheet } from "react-native";

export default function BlocoExercicio({ image, name }) {
  return (
    <View style={styles.bloco}>
      <Image
        style={styles.img}
        src={image}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 100,
    borderRadius: 12,
  },
  img: {
    width: 100,
    height: "100%",
  },
  name: {
    
  }
});
