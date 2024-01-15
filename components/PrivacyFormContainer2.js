import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const PrivacyFormContainer2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameProfile}>
      <View style={styles.frameProfileChild} />
      <View style={[styles.list, styles.listPosition]}>
        <View style={styles.security}>
          <View style={[styles.privacy, styles.changeLayout]}>
            <Text style={[styles.privacy1, styles.privacy1Typo]}>Privacy</Text>
            <View style={[styles.privacyChild, styles.childBorder]} />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/vector35.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconPosition1]}
              contentFit="cover"
              source={require("../assets/vector36.png")}
            />
          </View>
          <View style={[styles.change, styles.changeLayout]}>
            <Text style={[styles.changePassword, styles.privacy1Typo]}>
              Change Password
            </Text>
            <Image
              style={[styles.vectorIcon2, styles.vectorIconPosition1]}
              contentFit="cover"
              source={require("../assets/vector37.png")}
            />
            <Image
              style={[styles.vectorIcon3, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/vector38.png")}
            />
            <View style={[styles.privacyChild, styles.childBorder]} />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/vector35.png")}
            />
          </View>
          <View style={[styles.faceid, styles.changeLayout]}>
            <Text style={[styles.signInWith, styles.privacy1Typo]}>
              Sign in with face ID
            </Text>
            <View style={[styles.privacyChild, styles.childBorder]} />
            <Image
              style={[styles.vectorIcon5, styles.vectorIconPosition1]}
              contentFit="cover"
              source={require("../assets/vector40.png")}
            />
          </View>
          <Text style={[styles.security1, styles.security1Typo]}>SECURITY</Text>
        </View>
        <View style={[styles.notifications, styles.listPosition]}>
          <Text style={[styles.notifications1, styles.security1Typo]}>
            NOTIFICATIONS
          </Text>
          <View style={[styles.email, styles.emailChildLayout]}>
            <Text style={[styles.emailNotifications, styles.profile1Position]}>
              Email notifications
            </Text>
            <View style={[styles.emailChild, styles.emailChildLayout]} />
            <Image
              style={[styles.vectorIcon6, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector42.png")}
            />
            <Image
              style={[styles.vectorIcon7, styles.vectorIconPosition]}
              contentFit="cover"
              source={require("../assets/vector43.png")}
            />
          </View>
        </View>
        <View style={styles.account}>
          <Pressable
            style={[styles.profile, styles.emailChildLayout]}
            onPress={() => navigation.navigate("Profile1")}
          >
            <Text style={[styles.profile1, styles.profile1Position]}>
              Profile
            </Text>
            <Image
              style={[styles.vectorIcon8, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/vector44.png")}
            />
            <View style={[styles.profileChild, styles.emailChildLayout]} />
            <Image
              style={[styles.vectorIcon9, styles.vectorIconLayout1]}
              contentFit="cover"
              source={require("../assets/vector35.png")}
            />
          </Pressable>
          <Text style={styles.account1}>ACCOUNT</Text>
        </View>
        <Image
          style={[styles.vectorIcon10, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
        <Image
          style={[styles.vectorIcon11, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector46.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listPosition: {
    left: 1,
    position: "absolute",
  },
  changeLayout: {
    height: 37,
    left: 21,
    width: 298,
    position: "absolute",
  },
  privacy1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mid,
    left: 41,
    top: 0,
    position: "absolute",
  },
  childBorder: {
    height: 0,
    borderTopWidth: 0.3,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
    left: 0,
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconPosition1: {
    left: "3.62%",
    right: "92.85%",
    width: "3.52%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  security1Typo: {
    fontFamily: FontFamily.openSans,
    fontSize: FontSize.size_mini,
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    top: 0,
    position: "absolute",
  },
  emailChildLayout: {
    width: 299,
    position: "absolute",
  },
  profile1Position: {
    left: 27,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mid,
    top: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    top: "20.28%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIconLayout: {
    left: "90.15%",
    right: "2.46%",
    width: "7.38%",
    height: "2.78%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
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
  privacy1: {
    width: 79,
  },
  privacyChild: {
    top: 37,
    width: 298,
    borderTopWidth: 0.3,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    width: "1.68%",
    top: "16.22%",
    right: "2.01%",
    bottom: "51.35%",
    left: "96.31%",
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
  },
  vectorIcon5: {
    top: "18.92%",
    bottom: "48.65%",
    height: "32.43%",
  },
  faceid: {
    top: 47,
  },
  security1: {
    width: 92,
  },
  security: {
    top: 201,
    left: 7,
    width: 319,
    height: 202,
    position: "absolute",
  },
  notifications1: {
    width: 112,
  },
  emailNotifications: {
    width: 164,
  },
  emailChild: {
    top: 36,
    height: 0,
    borderTopWidth: 0.3,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
    left: 0,
  },
  vectorIcon6: {
    height: "20.28%",
    width: "2.14%",
    right: "95.72%",
    bottom: "59.44%",
    left: "2.14%",
  },
  vectorIcon7: {
    height: "36.94%",
    width: "3.91%",
    right: "95.69%",
    bottom: "42.78%",
    left: "0.4%",
  },
  email: {
    top: 44,
    left: 31,
    height: 36,
  },
  notifications: {
    top: 97,
    width: 330,
    height: 80,
  },
  profile1: {
    width: 91,
  },
  vectorIcon8: {
    height: "47.06%",
    width: "4.68%",
    top: "8.82%",
    right: "93.98%",
    bottom: "44.12%",
    left: "1.34%",
  },
  profileChild: {
    top: 34,
    height: 0,
    borderTopWidth: 0.3,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
    left: 0,
  },
  vectorIcon9: {
    height: "35.29%",
    width: "1.67%",
    top: "35.29%",
    right: "2.34%",
    bottom: "29.41%",
    left: "95.99%",
  },
  profile: {
    top: 39,
    left: 22,
    height: 34,
  },
  account1: {
    width: 96,
    fontSize: FontSize.size_mini,
    left: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    top: 0,
    position: "absolute",
  },
  account: {
    left: 5,
    width: 321,
    height: 73,
    top: 0,
    position: "absolute",
  },
  vectorIcon10: {
    top: "41.35%",
    bottom: "55.86%",
  },
  vectorIcon11: {
    top: "23.23%",
    bottom: "73.99%",
  },
  list: {
    height: 607,
    top: 0,
    width: 325,
  },
  frameProfile: {
    top: 225,
    left: 25,
    height: 534,
    width: 325,
    position: "absolute",
  },
});

export default PrivacyFormContainer2;
