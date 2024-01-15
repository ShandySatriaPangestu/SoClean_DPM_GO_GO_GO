import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AlertSection = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupShadowBox} />
      <View style={styles.groupShadowBox} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.status, styles.alertTypo]}>Status</Text>
      <Text style={[styles.onlineDevice, styles.deviceTypo]}>
        Online Device
      </Text>
      <Text style={[styles.totalDevice, styles.deviceTypo]}>Total Device</Text>
      <Text style={[styles.offlineDevice, styles.deviceTypo]}>
        Offline Device
      </Text>
      <Text style={[styles.text, styles.textTypo]}>24/30</Text>
      <Text style={[styles.text1, styles.textTypo]}>6</Text>
      <Text style={[styles.text2, styles.textTypo]}>30</Text>
      <Text style={[styles.device, styles.alertTypo]}>Device</Text>
      <Image
        style={[styles.groupInner, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-45.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-46.png")}
      />
      <Text style={[styles.alert, styles.alertTypo]}>Alert</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "74.23%",
    top: "15.46%",
    width: "2.85%",
    height: "10.31%",
    position: "absolute",
  },
  alertTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mini,
    top: "10.31%",
    width: "13.68%",
    height: "14.43%",
    position: "absolute",
  },
  deviceTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: "68.04%",
    width: "22.51%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    height: "14.43%",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "700",
    top: "43.3%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    width: "13.68%",
    height: "14.43%",
    position: "absolute",
  },
  lineIconLayout: {
    height: 72,
    width: 1,
    top: 18,
    position: "absolute",
  },
  groupShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorSilver_300,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 97,
    width: 351,
    position: "absolute",
  },
  vectorIcon: {
    right: "92.59%",
    left: "4.56%",
  },
  vectorIcon1: {
    right: "59.26%",
    left: "37.89%",
  },
  vectorIcon2: {
    right: "25.07%",
    left: "72.08%",
  },
  status: {
    left: "8.83%",
  },
  onlineDevice: {
    left: "4.27%",
  },
  totalDevice: {
    left: "37.61%",
  },
  offlineDevice: {
    left: "72.08%",
  },
  text: {
    left: "4.56%",
  },
  text1: {
    left: "72.08%",
  },
  text2: {
    left: "37.89%",
  },
  device: {
    left: "42.17%",
  },
  groupInner: {
    left: 109,
  },
  lineIcon: {
    left: 237,
  },
  alert: {
    left: "76.35%",
  },
  rectangleParent: {
    top: 103,
    left: 11,
    height: 97,
    width: 351,
    position: "absolute",
  },
});

export default AlertSection;
