import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import { useState } from "react";

export default function BlocoExercicio({ image, name }) {
  const [direction, setDirection] = useState("right");
  const [actived, setActived] = useState(false);


  const descricao = () => {
    if (actived) {
      setDirection("right");
    } else {
      setDirection("down");
    }
    setActived(!actived);
  };

  return (
    <View>
      <View
        style={[styles.bloco, actived && styles.active]}>
        <View style={styles.blocoName}>
          <Image style={[styles.img, actived && styles.active]} src={image} />
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity style={styles.link} onPress={descricao}>
            <AntDesign
              name={direction}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      {actived && (
        <View style={styles.description}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            aperiam quibusdam nesciunt. Doloremque accusantium, dicta, ut labore
            reprehenderit at cum quae laboriosam sapiente dolores, nostrum
            dolore ducimus rerum sed eos.
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
