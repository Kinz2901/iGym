import { View, Text, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function BlocoExercicio({ image, name }) {
  return (
    <View style={styles.bloco}>
      <View style={styles.blocoName}>
        <Image style={styles.img} src={image} />
        <Text style={styles.name}>{name}</Text>
        <AntDesign
          style={styles.seta}
          name="right"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
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
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    textAlign: "center",
  },
  seta: {
    marginRight: 24,
  }
});
