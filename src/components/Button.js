import React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import { COLORS } from "../util/colors";

const width = Dimensions.get("window").width;

function Button({ func }) {
  const [loaded] = useFonts({
    PoppinsBold: require("../../assets/fonts/poppins/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Pressable
      style={styles.container}
      onPress={() => func.navigate("register")}
    >
      <Text style={styles.btnText}>Get Started</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: 60,
    backgroundColor: COLORS.orange,
    alignSelf: "center",
    marginTop: 30,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#16100c",
    fontFamily: "PoppinsBold",
    fontSize: 20,
  },
});

export default Button;
