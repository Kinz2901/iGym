import { View, Text, Image, StyleSheet } from "react-native";

export default function BlocoExercicio({ image, name }) {
  return (
    <View style={styles.bloco}>
      <Image
        style={styles.img}
        src={image}
      />
      <View style={styles.blocoName}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 100,
    borderRadius: 12,
  },
  img: {
    width: 100,
    height: "100%",
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  blocoName: {
    width: 140,
    margin: "auto",
    backgroundColor: "#F2F22F",
  },
  name: {
    textAlign: "center",
  }
});
