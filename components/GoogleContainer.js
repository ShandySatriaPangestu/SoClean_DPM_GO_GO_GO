import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const GoogleContainer = ({ dimensionCode }) => {
  return (
    <View style={styles.linked}>
      <Text style={styles.linkedAccounts}>Linked Accounts</Text>
      <View style={[styles.facebook, styles.googlePosition]}>
        <View style={[styles.facebookChild, styles.childPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.logosfacebookIcon, styles.logosfacebookIconPosition]}
          contentFit="cover"
          source={require("../assets/logosfacebook.png")}
        />
        <Text style={[styles.facebook1, styles.google1Typo]}>Facebook</Text>
      </View>
      <View style={[styles.google, styles.googlePosition]}>
        <View style={[styles.googleChild, styles.childPosition]} />
        <Image
          style={styles.logosfacebookIconPosition}
          contentFit="cover"
          source={dimensionCode}
        />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector39.png")}
        />
        <Text style={[styles.google1, styles.google1Typo]}>Google</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  googlePosition: {
    left: "0%",
    right: "0%",
    width: "100%",
    height: "34.82%",
    position: "absolute",
  },
  childPosition: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "7.02%",
    position: "absolute",
  },
  logosfacebookIconPosition: {
    left: "2.92%",
    bottom: "14.87%",
    right: "89.12%",
    top: "15.38%",
    width: "7.95%",
    height: "69.74%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  google1Typo: {
    left: "16.37%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  linkedAccounts: {
    left: "1.17%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mini,
    top: "0%",
    position: "absolute",
  },
  facebookChild: {
    backgroundColor: Color.colorGray_100,
  },
  vectorIcon: {
    height: "43.33%",
    top: "30.77%",
    right: "4.68%",
    bottom: "25.9%",
    left: "88.3%",
  },
  logosfacebookIcon: {
    borderRadius: Border.br_71xl,
  },
  facebook1: {
    top: "23.08%",
  },
  facebook: {
    top: "65.18%",
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "34.82%",
  },
  googleChild: {
    backgroundColor: Color.colorWhite,
  },
  vectorIcon1: {
    height: "43.59%",
    top: "28.21%",
    right: "4.39%",
    bottom: "28.21%",
    left: "88.6%",
  },
  google1: {
    top: "25.64%",
  },
  google: {
    top: "24.11%",
    bottom: "41.07%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "34.82%",
  },
  linked: {
    height: "13.79%",
    width: "91.2%",
    top: "74.26%",
    right: "4.27%",
    bottom: "11.95%",
    left: "4.53%",
    position: "absolute",
  },
});

export default GoogleContainer;
