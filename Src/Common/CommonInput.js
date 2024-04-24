import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import { colors } from "../Colors";

export default function CommonInput({
  title,
  LeftIcon,
  extrasty,
  placeholderTextColor,
  RightIcon,
}) {
  return (
    <View style={[styles.mainContainer, extrasty]}>
      <View style={styles.inputview}>
        {!!LeftIcon && <LeftIcon />}
        <TextInput
          placeholder={title}
          style={styles.input}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
      {!!RightIcon && <RightIcon />}
    </View>
  );
}

const styles = StyleSheet.create({
  inputview: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  mainContainer: {
    alignItems: "center",
    height: 60,
    width: "90%",
    alignSelf: "center",
    borderRadius: 16,
    paddingHorizontal: 20,
    elevation: 1,
    flexDirection: "row",
    backgroundColor: colors.light.input,
    justifyContent: "space-between",
    marginVertical: 20,
  },
});
