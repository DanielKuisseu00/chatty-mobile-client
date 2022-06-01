import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Pressable, Text } from "react-native";
import { slides } from "../data/slides";

const height = Dimensions.get("window").height;

const Footer = ({ func }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.footerContainer}>
      <View style={styles.indicatorContainer}>
        {slides.map((item, index) => {
          return (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && {
                  backgroundColor: "white",
                  width: 25,
                },
              ]}
            />
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.backBtn}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Skip </Text>
        </Pressable>
        <Pressable style={styles.nextBtn}>
          <Text style={{ color: "#2c2f5e", fontWeight: "bold" }}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: height * 0.25,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    height: 15,
  },
  indicator: {
    height: 5.5,
    width: 10,
    backgroundColor: "gray",
    borderRadius: 2,
    marginHorizontal: 3,
  },
  buttonContainer: {
    marginBottom: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    flex: 1,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  nextBtn: {
    flex: 1,
    backgroundColor: "white",
    height: 70,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default Footer;
