import { View, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { colors } from "./Colors";
import { useDispatch, useSelector } from "react-redux";
import { StorageValue } from "../Src/utils/asyncStorage";
import { changeThemeAction } from "../Src/redux/action/themeAction";

const Splash = ({ navigation }) => {
  const color = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    asyncProcess();
    setTimeout(() => {
      navigation.navigate("OnBoarding1");
    }, 2000);
  }, []);

  const asyncProcess = async () => {
    try {
      let Data = await StorageValue();
      let themeColor = Data;
      if (Data) {
        if (themeColor === "light") {
          dispatch(changeThemeAction(colors.light));
        } else {
          dispatch(changeThemeAction(colors.dark));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: color.backgroundColor }]}
    >
      <Image
        source={
          color.light
            ? require("./assets/UiSplash.png")
            : require("./assets/UIsplashDark.png")
        }
        style={styles.image}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light.backgroundColor,
  },
});
