import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const LocationForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.account}>
      <View style={styles.map}>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector50.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector51.png")}
        />
        <Text style={[styles.turnOnLocation, styles.profile1Typo]}>
          Turn on Location
        </Text>
        <View style={[styles.mapChild, styles.childLayout]} />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector49.png")}
        />
      </View>
      <View style={styles.profile}>
        <Text style={[styles.profile1, styles.profile1Typo]}>Profile</Text>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector44.png")}
        />
        <View style={[styles.profileChild, styles.childLayout]} />
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Profile2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector35.png")}
          />
        </Pressable>
      </View>
      <Text style={styles.account1}>ACCOUNT</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  profile1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mid,
    top: 0,
    position: "absolute",
  },
  childLayout: {
    height: 0,
    borderTopWidth: 0.3,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
    width: 299,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "35.85%",
    width: "3.5%",
    top: "16.34%",
    right: "92.23%",
    bottom: "47.8%",
    left: "4.27%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "9.76%",
    width: "1.17%",
    top: "26.1%",
    right: "93.4%",
    bottom: "64.15%",
    left: "5.43%",
    position: "absolute",
  },
  turnOnLocation: {
    left: 35,
    width: 152,
  },
  mapChild: {
    top: 41,
  },
  vectorIcon2: {
    height: "41.46%",
    width: "8%",
    top: "14.63%",
    right: "0%",
    bottom: "43.9%",
    left: "92%",
    position: "absolute",
  },
  map: {
    height: "30.83%",
    width: "93.46%",
    top: "69.17%",
    right: "0.31%",
    bottom: "0%",
    left: "6.23%",
    position: "absolute",
  },
  profile1: {
    left: 27,
    width: 91,
  },
  vectorIcon3: {
    height: "47.06%",
    width: "4.68%",
    top: "8.82%",
    right: "93.98%",
    bottom: "44.12%",
    left: "1.34%",
    position: "absolute",
  },
  profileChild: {
    top: 34,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "95.99%",
    top: "35.29%",
    right: "2.34%",
    bottom: "29.41%",
    width: "1.67%",
    height: "35.29%",
    position: "absolute",
  },
  profile: {
    top: 39,
    left: 22,
    height: 34,
    width: 299,
    position: "absolute",
  },
  account1: {
    fontSize: FontSize.size_mini,
    width: 96,
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    top: 0,
    position: "absolute",
  },
  account: {
    height: "21.91%",
    width: "98.77%",
    top: "0%",
    right: "-0.31%",
    bottom: "78.09%",
    left: "1.54%",
    position: "absolute",
  },
});

export default LocationForm;
