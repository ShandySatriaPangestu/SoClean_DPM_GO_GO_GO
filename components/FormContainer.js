import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "./ThemeDarkNotchTrueCallI";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer = ({ iPhoneStatusBarLeft }) => {
  const headerStyle = useMemo(() => {
    return {
      ...getStyleValue("left", iPhoneStatusBarLeft),
    };
  }, [iPhoneStatusBarLeft]);

  return (
    <View style={[styles.header, styles.headerPosition, headerStyle]}>
      <View style={[styles.headerChild, styles.headerPosition]} />
      <Text style={styles.absensi}>Absensi</Text>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={0}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 105,
    top: 0,
    position: "absolute",
  },
  headerChild: {
    left: 19,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 375,
  },
  absensi: {
    height: "17.14%",
    width: "20.98%",
    top: "65.71%",
    left: "44.15%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  header: {
    left: -20,
    width: 410,
  },
});

export default FormContainer;
