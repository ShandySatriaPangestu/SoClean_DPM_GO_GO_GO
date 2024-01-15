import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HinoForm = ({ propTop, propLeft }) => {
  const jemputStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.jemput, jemputStyle]}>
      <Image
        style={[styles.elipseIcon, styles.jemput1Position]}
        contentFit="cover"
        source={require("../assets/elipse.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.hino, styles.hinoTypo]}>Hino</Text>
      <View style={[styles.jemput1, styles.jemput1Position]}>
        <Image
          style={[styles.elipseIcon, styles.jemput1Position]}
          contentFit="cover"
          source={require("../assets/elipse.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Text style={[styles.hino1, styles.hinoTypo]}>Hino</Text>
        <View style={[styles.jemput2, styles.jemputPosition]}>
          <Image
            style={[styles.elipseIcon, styles.jemput1Position]}
            contentFit="cover"
            source={require("../assets/elipse.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.hino2, styles.hinoTypo]}>Hino</Text>
          <View style={[styles.jemput3, styles.jemputPosition]}>
            <Image
              style={[styles.elipseIcon, styles.jemput1Position]}
              contentFit="cover"
              source={require("../assets/elipse.png")}
            />
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
            <Text style={[styles.hino2, styles.hinoTypo]}>Hino</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jemput1Position: {
    left: 0,
    width: 60,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "23.33%",
    right: "20%",
    width: "56.67%",
    position: "absolute",
  },
  hinoTypo: {
    height: 11,
    width: 35,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    left: 19,
    position: "absolute",
  },
  jemputPosition: {
    top: 120,
    left: 0,
    width: 60,
    position: "absolute",
  },
  elipseIcon: {
    top: 0,
    height: 60,
  },
  vectorIcon: {
    height: "6.82%",
    top: "3.41%",
    bottom: "89.77%",
  },
  hino: {
    top: 65,
  },
  vectorIcon1: {
    height: "9.52%",
    top: "4.76%",
    bottom: "85.71%",
  },
  hino1: {
    top: 67,
  },
  vectorIcon2: {
    height: "15.38%",
    top: "7.69%",
    bottom: "76.92%",
  },
  hino2: {
    top: 64,
  },
  vectorIcon3: {
    height: "40%",
    top: "20%",
    bottom: "40%",
  },
  jemput3: {
    height: 75,
  },
  jemput2: {
    height: 195,
  },
  jemput1: {
    top: 125,
    height: 315,
  },
  jemput: {
    top: 269,
    left: 32,
    height: 440,
    width: 60,
    position: "absolute",
  },
});

export default HinoForm;
