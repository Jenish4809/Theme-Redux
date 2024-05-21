import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import CommonInput from "../../Common/CommonInput";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { CommonButton } from "../../Common/CommonBtn";
import { useDispatch, useSelector } from "react-redux";
import { setAsyncStorageData } from "../../utils/helper";
import { THEME } from "../../utils/keys";
import { changeThemeAction } from "../../redux/action/themeAction";
import { colors } from "../../Colors";

export default function Login({ navigation }) {
  const color = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const [enable, setEnable] = useState(!!color.dark);

  const CommonSocial = ({ source }) => {
    return (
      <TouchableOpacity
        style={[styles.facebookview, { borderColor: color.border }]}
      >
        <Image source={source} style={styles.facebook} />
      </TouchableOpacity>
    );
  };

  const onPressLightTheme = async () => {
    await setAsyncStorageData(THEME, "light");
    dispatch(changeThemeAction(colors.light));
  };

  const onPressDarkTheme = async () => {
    await setAsyncStorageData(THEME, "dark");
    dispatch(changeThemeAction(colors.dark));
  };

  const toggleSwitch = (val) => {
    if (val) {
      onPressDarkTheme();
    } else {
      onPressLightTheme();
    }
    setEnable((previousState) => !previousState);
  };

  return (
    <View style={[styles.main, { backgroundColor: color.backgroundColor }]}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          style={[styles.arrow, { color: color.GrayScale }]}
          onPress={() => navigation.navigate("LetsIn")}
        />
        <Switch
          trackColor={{ false: color.darkgray, true: color.input }}
          thumbColor={color.purple}
          onValueChange={toggleSwitch}
          value={enable}
          style={styles.switch}
        />
      </View>
      <View style={styles.innerview}>
        <View>
          <Image
            source={require("../../assets/screen.png")}
            style={styles.logo}
          />
          <Text style={[styles.title, { color: color.GrayScale }]}>
            Create Your Account
          </Text>
        </View>
        <CommonInput
          extrasty={{ backgroundColor: color.input }}
          title={"Email"}
          placeholderTextColor={color.darkgray}
          LeftIcon={() => (
            <Fontisto
              name="email"
              style={[styles.emailicon, { color: color.darkgray }]}
            />
          )}
        />
        <CommonInput
          extrasty={{ backgroundColor: color.input }}
          title={"Password"}
          placeholderTextColor={color.darkgray}
          LeftIcon={() => (
            <FontAwesome
              name="lock"
              style={[styles.emailicon, { color: color.darkgray }]}
            />
          )}
          RightIcon={() => (
            <FontAwesome5
              name="eye-slash"
              style={[styles.eyeicon, { color: color.darkgray }]}
            />
          )}
        />
        <View style={styles.rememberCon}>
          <View style={[styles.box, { borderColor: color.purple }]} />
          <Text style={{ color: color.GrayScale }}>Remember Me</Text>
        </View>
        <CommonButton title={"Sign Up"} extra={styles.btnsty} />
        <Image
          source={require("../../assets/or2.png")}
          style={styles.continue}
        />
        <View style={styles.loginview}>
          <CommonSocial source={require("../../assets/facebook.png")} />
          <CommonSocial source={require("../../assets/google.png")} />
          <CommonSocial source={require("../../assets/apple.png")} />
        </View>
        <View style={styles.bottomtext}>
          <Text style={[styles.account, { color: color.darkgray }]}>
            Alreadt have an account?
          </Text>
          <Text style={[styles.signup, { color: color.purple }]}>sign In</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  innerview: {
    marginVertical: 40,
  },
  arrow: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15,
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    alignSelf: "center",
  },
  emailicon: {
    fontSize: 16,
  },
  eyeicon: {
    fontSize: 16,
  },
  rememberCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 20,
  },
  box: {
    height: 24,
    width: 24,
    borderWidth: 3,
    borderRadius: 8,
  },
  continue: {
    width: "85%",
    height: 50,
    marginVertical: 30,
    alignSelf: "center",
  },
  btnsty: {
    width: "90%",
    alignSelf: "center",
  },
  facebook: {
    height: 25,
    width: 25,
  },
  facebookview: {
    height: 66,
    width: 88,
    borderWidth: 1,

    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  loginview: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
  },
  account: {
    fontSize: 14,
    fontWeight: "400",
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  switch: {
    transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }],
  },
});
