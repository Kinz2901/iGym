import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

export default function BlocoExercicio({ image, name, series, descricao }) {
  const [direction, setDirection] = useState("right");
  const [actived, setActived] = useState(false);

  const text = () => {
    if (actived) {
      setDirection("right");
    } else {
      setDirection("down");
    }
    setActived(!actived);
  };

  return (
    <View>
      <View style={[styles.bloco, actived && styles.active]}>
        <View style={styles.blocoName}>
          <Image style={[styles.img, actived && styles.active]} src={image} />
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity style={styles.link} onPress={text}>
            <AntDesign name={direction} size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {actived && (
        <View style={styles.description}>
          <Text style={styles.series}>{series}</Text>
          <Text style={{ fontWeight: "bold", }}>
            Como fazer:  
          </Text>
          <Text>
            {descricao}
          </Text>
        </View>
      )}
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
    width: 120,
  },
  link: {
    height: "100%",
    width: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  series: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  active: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
