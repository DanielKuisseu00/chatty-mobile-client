import React, { useState } from "react";
import { slides } from "../data/slides";
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Text,
} from "react-native";
import Slide from "../components/Slide";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateScrollIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(currentIndex);
    console.log(currentIndex);
  };

  const handleNext = () => {
    console.log("next");
  };

  const handleSkip = () => {
    console.log("skip");
  };

  const Footer = ({ func }) => {
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
          <Pressable style={styles.backBtn} onPress={handleSkip}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Skip </Text>
          </Pressable>
          <Pressable style={styles.nextBtn} onPress={handleNext}>
            <Text style={{ color: "#2c2f5e", fontWeight: "bold" }}>Next</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onMomentumScrollEnd={updateScrollIndex}
        style={styles.list}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Slide item={item} />;
        }}
      />
      <Footer func={updateScrollIndex} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2f5e",
  },
  list: {
    maxHeight: height * 0.75,
  },
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

export default OnBoardingScreen;
