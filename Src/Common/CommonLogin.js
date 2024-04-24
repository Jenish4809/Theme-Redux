import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../Colors";

export default function CommonLogin({ title, extra, extratext, Image }) {
  return (
    <TouchableOpacity style={[styles.btnsty, extra]}>
      <View style={styles.imageview}>
        {!!Image && <Image />}
        <Text style={[styles.logintext, extratext]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnsty: {
    backgroundColor: colors.light.backgroundColor,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 25,
    marginVertical: 5,
    borderColor: "lightgray",
    borderWidth: 1,
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
