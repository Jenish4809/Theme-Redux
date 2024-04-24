import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CommonButton } from "./Common/CommonBtn";
import { useSelector } from "react-redux";

export default function OnBoarding1({ navigation }) {
  const color = useSelector((state) => state.theme.theme);
  return (
    <View
      style={[styles.container, { backgroundColor: color.backgroundColor }]}
    >
      <View style={styles.innerView}>
        <Image source={require("./assets/Group.png")} style={styles.group} />
        <Text style={[styles.text, { color: color.GrayScale }]}>
          It’s easy to find a soul mate nearby & around you
        </Text>
      </View>

      <CommonButton
        extra={styles.btn}
        title={"Next"}
        onpress={() => {
          navigation.navigate("OnBoarding2");
        }}
      />
    </View>
  );
}

export const OnBoarding2 = ({ navigation }) => {
  const color = useSelector((state) => state.theme.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: color.backgroundColor }]}
    >
      <View style={styles.innerView}>
        <Image source={require("./assets/Group2.png")} style={styles.group} />
        <Text style={[styles.text, { color: color.GrayScale }]}>
          You can share, chat, and video call with your match
        </Text>
      </View>

      <CommonButton
        extra={styles.btn}
        title={"Next"}
        onpress={() => {
          navigation.navigate("OnBoarding3");
        }}
      />
    </View>
  );
};

export const OnBoarding3 = ({ navigation }) => {
  const color = useSelector((state) => state.theme.theme);

  return (
    <View
      style={[styles.container, { backgroundColor: color.backgroundColor }]}
    >
      <View style={styles.innerView}>
        <Image source={require("./assets/Group3.png")} style={styles.group} />
        <Text style={[styles.text, { color: color.GrayScale }]}>
          Don't wait anymore, find your soul mate right now!
        </Text>
      </View>
      <CommonButton
        extra={styles.btn}
        title={"Next"}
        onpress={() => {
          navigation.navigate("LetsIn");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  group: {
    height: 300,
    width: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: 35,
    fontWeight: "700",
    textAlign: "center",
  },
  innerView: {
    flex: 1,
    justifyContent: "center",
    gap: 40,
  },
  btn: {
    marginBottom: 30,
  },
});
