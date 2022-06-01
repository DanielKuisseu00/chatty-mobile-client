import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  Image,
  ColorPropType,
} from "react-native";
import { useFonts } from "expo-font";
import Button from "../components/Button";
import { COLORS } from "../util/colors";

const height = Dimensions.get("window").height;

function JoinScreen({ navigation }) {
  const [loaded] = useFonts({
    PoppinsBold: require("../../assets/fonts/poppins/Poppins-Bold.ttf"),
    PoppinsRegular: require("../../assets/fonts/poppins/Poppins-Regular.ttf"),
  });

  const handlePress = () => {
    navigation.navigate("join");
  };

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          resizeMode={"contain"}
          style={styles.img}
          source={require("../../assets/without-shadow/girl-sitting.png")}
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>
          {`It's easy talking \nto your friends with Chatty`}
        </Text>
        <Text style={styles.subText}>
          {`Call and text your freinds simply \nand easily with Chatty`}
        </Text>
        <Button func={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.brown,
    flex: 1,
  },

  topSection: {
    height: "60%",
  },
  bottomSection: {
    flex: 0.5,
    paddingTop: 10,
    paddingLeft: 20,
  },
  title: {
    color: "white",
    fontSize: 35,
    fontFamily: "PoppinsBold",
  },
  subText: {
    color: COLORS.gray,
    fontSize: 15,
    marginTop: 10,
    fontFamily: "PoppinsRegular",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default JoinScreen;
