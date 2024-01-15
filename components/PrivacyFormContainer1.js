import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import PrivacyFormContainer from "./PrivacyFormContainer";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const PrivacyFormContainer1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameProfile}>
      <View style={styles.frameProfileChild} />
      <View style={[styles.list, styles.listPosition]}>
        <PrivacyFormContainer vectorIconTop={225} vectorIconLeft={3} />
        <View style={[styles.notifications, styles.listPosition]}>
          <Text style={styles.notifications1}>NOTIFICATIONS</Text>
          <View style={[styles.email, styles.emailLayout]}>
            <Text style={[styles.emailNotifications, styles.profile1Typo]}>
              Email notifications
            </Text>
            <View style={[styles.emailChild, styles.childLayout]} />
            <Image
              style={[styles.vectorIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector41.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector42.png")}
            />
            <Image
              style={[styles.vectorIcon2, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector43.png")}
            />
          </View>
        </View>
        <View style={styles.account}>
          <View style={[styles.profile, styles.emailLayout]}>
            <Text style={[styles.profile1, styles.profile1Typo]}>Profile</Text>
            <Image
              style={[styles.vectorIcon3, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/vector44.png")}
            />
            <View style={[styles.profileChild, styles.childLayout]} />
            <Pressable
              style={[styles.vector, styles.vectorPosition]}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/vector35.png")}
              />
            </Pressable>
          </View>
          <Text style={[styles.account1, styles.profile1Typo]}>ACCOUNT</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listPosition: {
    left: 0,
    width: 325,
    position: "absolute",
  },
  emailLayout: {
    width: 299,
    position: "absolute",
  },
  profile1Typo: {
    fontFamily: FontFamily.nunito,
    textAlign: "left",
    color: Color.colorBlack,
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
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  vectorIconPosition: {
    top: "20.28%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorPosition: {
    right: "2.34%",
    position: "absolute",
  },
  frameProfileChild: {
    top: -19,
    left: -23,
    backgroundColor: Color.colorWhite,
    width: 373,
    height: 612,
    position: "absolute",
  },
  notifications1: {
    fontFamily: FontFamily.openSans,
    width: 112,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    left: 0,
    top: 0,
    position: "absolute",
  },
  emailNotifications: {
    width: 164,
    fontSize: FontSize.size_mid,
    left: 27,
    fontFamily: FontFamily.nunito,
  },
  emailChild: {
    top: 36,
  },
  vectorIcon: {
    height: "46.94%",
    width: "8.03%",
    top: "28.06%",
    bottom: "25%",
    left: "89.63%",
    right: "2.34%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "20.28%",
    width: "2.14%",
    right: "95.72%",
    bottom: "59.44%",
    left: "2.14%",
  },
  vectorIcon2: {
    height: "36.94%",
    width: "3.91%",
    right: "95.69%",
    bottom: "42.78%",
    left: "0.4%",
  },
  email: {
    top: 49,
    left: 26,
    height: 36,
  },
  notifications: {
    top: 109,
    height: 85,
  },
  profile1: {
    width: 91,
    fontSize: FontSize.size_mid,
    left: 27,
    fontFamily: FontFamily.nunito,
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
    bottom: "29.41%",
    width: "1.67%",
    height: "35.29%",
  },
  profile: {
    top: 39,
    left: 22,
    height: 34,
  },
  account1: {
    width: 96,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mini,
    left: 0,
  },
  account: {
    left: 5,
    width: 321,
    height: 73,
    top: 0,
    position: "absolute",
  },
  list: {
    height: 607,
    top: 0,
  },
  frameProfile: {
    top: 225,
    left: 25,
    height: 534,
    width: 325,
    position: "absolute",
  },
});

export default PrivacyFormContainer1;
