import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Item({ iconSrc, text }) {
  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={() => alert(text)}>
        <Image source={iconSrc} style={styles.image} />
      </TouchableOpacity>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#ffff00",
  },
  image: {
    width: 50,
    height: 50,
  },
});
