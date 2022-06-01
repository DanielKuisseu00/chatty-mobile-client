import React from "react";
import styled from "styled-components/native";
import { Dimensions, View, Image, StyleSheet, Text } from "react-native";

const width = Dimensions.get("window").width;

const Slide = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    height: "75%",
    width: width,
    resizeMode: "contain",
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  subtitle: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Slide;
