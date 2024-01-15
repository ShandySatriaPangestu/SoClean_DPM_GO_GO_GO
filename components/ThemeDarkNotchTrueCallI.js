import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ThemeDarkNotchTrueCallI = ({
  themeDarkNotchTrueCallIPosition,
  themeDarkNotchTrueCallIWidth,
  themeDarkNotchTrueCallIHeight,
  themeDarkNotchTrueCallITop,
  themeDarkNotchTrueCallILeft,
  themeDarkNotchTrueCallIBackgroundColor,
}) => {
  const themeDarkNotchTrueCallIStyle = useMemo(() => {
    return {
      ...getStyleValue("position", themeDarkNotchTrueCallIPosition),
      ...getStyleValue("width", themeDarkNotchTrueCallIWidth),
      ...getStyleValue("height", themeDarkNotchTrueCallIHeight),
      ...getStyleValue("top", themeDarkNotchTrueCallITop),
      ...getStyleValue("left", themeDarkNotchTrueCallILeft),
      ...getStyleValue(
        "backgroundColor",
        themeDarkNotchTrueCallIBackgroundColor
      ),
    };
  }, [
    themeDarkNotchTrueCallIPosition,
    themeDarkNotchTrueCallIWidth,
    themeDarkNotchTrueCallIHeight,
    themeDarkNotchTrueCallITop,
    themeDarkNotchTrueCallILeft,
    themeDarkNotchTrueCallIBackgroundColor,
  ]);

  return (
    <View
      style={[styles.themedarkNotchtrueCallI, themeDarkNotchTrueCallIStyle]}
    >
      <Image
        style={styles.batteryIcon}
        contentFit="cover"
        source={require("../assets/-battery1.png")}
      />
      <Image
        style={styles.receptionIcon}
        contentFit="cover"
        source={require("../assets/reception.png")}
      />
      <Image
        style={styles.lteIcon}
        contentFit="cover"
        source={require("../assets/lte.png")}
      />
      <Text style={styles.time}>19:02</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  batteryIcon: {
    top: 17,
    right: 26,
    width: 27,
    height: 13,
    position: "absolute",
  },
  receptionIcon: {
    width: 18,
    height: 11,
  },
  lteIcon: {
    top: 19,
    right: 57,
    width: 20,
    height: 10,
    position: "absolute",
  },
  time: {
    top: 15,
    left: 39,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.nunito,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  themedarkNotchtrueCallI: {
    width: 414,
    height: 44,
    overflow: "hidden",
  },
});

export default ThemeDarkNotchTrueCallI;
