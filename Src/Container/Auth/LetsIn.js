import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import CommonLogin from "../../Common/CommonLogin";
import { CommonButton } from "../../Common/CommonBtn";
import { useSelector } from "react-redux";

export default function LetsIn({ navigation }) {
  const color = useSelector((state) => state.theme.theme);
  return (
    <View style={[styles.main, { backgroundColor: color.backgroundColor }]}>
      <AntDesign
        name="arrowleft"
        style={[styles.arrow, { color: color.GrayScale }]}
        onPress={() => navigation.navigate("OnBoarding3")}
      />
      <View style={styles.innnerView}>
        <Image
          source={require("../../assets/Group4.png")}
          style={styles.group}
        />
        <Text style={[styles.text, { color: color.GrayScale }]}>
          Let’s you in
        </Text>
      </View>
      <View style={styles.loginview}>
        <CommonLogin
          extra={{ backgroundColor: color.input, borderColor: color.border }}
          extratext={{ color: color.GrayScale }}
          title={"Login with Facebook"}
          Image={() => (
            <Image
              source={require("../../assets/facebook.png")}
              style={styles.image}
            />
          )}
        />
        <CommonLogin
          extratext={{ color: color.GrayScale }}
          extra={{ backgroundColor: color.input, borderColor: color.border }}
          title={"Login with Google"}
          Image={() => (
            <Image
              source={require("../../assets/google.png")}
              style={styles.image}
            />
          )}
        />
        <CommonLogin
          extra={{ backgroundColor: color.input, borderColor: color.border }}
          extratext={{ color: color.GrayScale }}
          title={"Login with Apple"}
          Image={() => (
            <Image
              source={require("../../assets/apple.png")}
              style={styles.image}
            />
          )}
        />
        <Image source={require("../../assets/or.png")} style={styles.orline} />
      </View>
      <CommonButton
        title={"Sign in with Password"}
        extra={styles.login}
        onpress={() => navigation.navigate("Login")}
      />
      <View style={styles.bottomtext}>
        <Text style={styles.account}>Don't have an account?</Text>
        <Text style={styles.signup}>sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  innnerView: {
    marginTop: 30,
  },
  arrow: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15,
  },
  group: {
    height: 200,
    width: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: 45,
    fontWeight: "700",
    textAlign: "center",
  },
  loginview: {
    marginVertical: 20,
    gap: 15,
  },

  image: {
    height: 25,
    width: 25,
  },
  orline: {
    height: 50,
    width: "85  %",
    alignSelf: "center",
  },
  login: {
    width: "90%",
    alignSelf: "center",
  },
  account: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.light.darkgray,
  },
  bottomtext: {
    flexDirection: "row",
    gap: 7,
    justifyContent: "center",
    marginVertical: "10%",
  },
  signup: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.light.purple,
  },
});
