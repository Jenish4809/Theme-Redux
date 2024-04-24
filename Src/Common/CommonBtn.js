import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../Colors";

export const CommonButton = ({
  title,
  onpress,
  extra,
  LeftIcon,
  titleextra,
}) => {
  return (
    <TouchableOpacity style={[styles.btnsty, extra]} onPress={onpress}>
      {!!LeftIcon && <LeftIcon />}
      <Text style={[styles.text, titleextra]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnsty: {
    height: 58,
    width: "100%",
    backgroundColor: colors.light.purple,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.light.backgroundColor,
  },
  logintext: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.light.GrayScale,
  },
  imageview: {
    flexDirection: "row",
    gap: 10,
  },
});
