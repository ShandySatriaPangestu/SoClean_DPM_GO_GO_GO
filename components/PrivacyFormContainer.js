import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PrivacyFormContainer = ({ vectorIconTop, vectorIconLeft }) => {
  const sECURITYStyle = useMemo(() => {
    return {
      ...getStyleValue("top", vectorIconTop),
      ...getStyleValue("left", vectorIconLeft),
    };
  }, [vectorIconTop, vectorIconLeft]);

  return (
    <View style={[styles.security, sECURITYStyle]}>
      <View style={[styles.privacy, styles.changeLayout]}>
        <Text style={[styles.privacy1, styles.privacy1FlexBox]}>Privacy</Text>
        <View style={[styles.privacyChild, styles.security1Position]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector35.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector36.png")}
        />
      </View>
      <View style={[styles.change, styles.changeLayout]}>
        <Text style={[styles.changePassword, styles.privacy1FlexBox]}>
          Change Password
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector37.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector38.png")}
        />
        <View style={[styles.privacyChild, styles.security1Position]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector35.png")}
        />
      </View>
      <View style={[styles.faceid, styles.changeLayout]}>
        <Text style={[styles.signInWith, styles.privacy1FlexBox]}>
          Sign in with face ID
        </Text>
        <View style={[styles.privacyChild, styles.security1Position]} />
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector39.png")}
        />
        <Image
          style={[styles.vectorIcon6, styles.vectorIconPosition]}
          contentFit="cover"
          source={require("../assets/vector40.png")}
        />
      </View>
      <Text style={[styles.security1, styles.security1Position]}>SECURITY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  changeLayout: {
    height: 37,
    left: 21,
    width: 298,
    position: "absolute",
  },
  privacy1FlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    top: 0,
  },
  security1Position: {
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconPosition: {
    left: "3.62%",
    right: "92.85%",
    width: "3.52%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  privacy1: {
    width: 79,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mid,
    left: 41,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  privacyChild: {
    top: 37,
    borderStyle: "solid",
    borderColor: Color.colorGray_600,
    borderTopWidth: 0.3,
    height: 0,
    left: 0,
    width: 298,
  },
  vectorIcon: {
    width: "1.68%",
    top: "16.22%",
    bottom: "51.35%",
    left: "96.31%",
    right: "2.01%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "32.43%",
  },
  vectorIcon1: {
    height: "39.73%",
    top: "12.7%",
    bottom: "47.57%",
  },
  privacy: {
    top: 165,
  },
  changePassword: {
    width: 150,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mid,
    left: 41,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  vectorIcon2: {
    height: "19.73%",
    top: "30.54%",
    bottom: "49.73%",
  },
  vectorIcon3: {
    height: "16.22%",
    width: "1.95%",
    top: "14.32%",
    right: "93.66%",
    bottom: "69.46%",
    left: "4.4%",
  },
  change: {
    top: 106,
  },
  signInWith: {
    width: 158,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mid,
    left: 41,
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  vectorIcon5: {
    height: "45.95%",
    width: "8.05%",
    top: "8.11%",
    bottom: "45.95%",
    left: "89.93%",
    right: "2.01%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIcon6: {
    top: "18.92%",
    bottom: "48.65%",
    height: "32.43%",
  },
  faceid: {
    top: 47,
  },
  security1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSans,
    width: 92,
    textAlign: "left",
    color: Color.colorBlack,
    top: 0,
    left: 0,
  },
  security: {
    top: 225,
    left: 3,
    width: 319,
    height: 202,
    position: "absolute",
  },
});

export default PrivacyFormContainer;
