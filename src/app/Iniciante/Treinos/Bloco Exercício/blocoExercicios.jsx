import { View, Text, Image, StyleSheet } from "react-native";

export default function BlocoExercicio({ image, name }) {
  return (
    <View>
      <Image
        style={styles.img}
        src={image}
      />
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 66,
    height: 58,
  },
});
