import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

const EmailNotificationsContainer = () => {
  return (
    <View style={styles.notifications}>
      <Text style={styles.notifications1}>NOTIFICATIONS</Text>
      <View style={styles.email}>
        <Text style={[styles.emailNotifications, styles.notificationsTypo]}>
          Email notifications
        </Text>
        <View style={[styles.emailChild, styles.childPosition]} />
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
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
      <View style={styles.activities}>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector48.png")}
        />
        <Text
          style={[styles.activitiesNotifications, styles.notificationsTypo]}
        >
          Activities notifications
        </Text>
        <Text style={[styles.peopleYouFollow, styles.notificationsTypo]}>
          People you follow, new releases, book recommendations
        </Text>
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector49.png")}
        />
        <View style={[styles.activitiesChild, styles.childPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsTypo: {
    fontFamily: FontFamily.nunito,
    textAlign: "left",
    position: "absolute",
  },
  childPosition: {
    height: 0,
    borderTopWidth: 0.3,
    borderColor: Color.colorGray_600,
    borderStyle: "solid",
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
    top: "20.28%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  notifications1: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.openSans,
    width: 112,
    textAlign: "left",
    color: Color.colorBlack,
    top: 0,
    left: 0,
    position: "absolute",
  },
  emailNotifications: {
    width: 164,
    fontSize: FontSize.size_mid,
    left: 27,
    fontFamily: FontFamily.nunito,
    color: Color.colorBlack,
    top: 0,
  },
  emailChild: {
    top: 36,
    width: 299,
  },
  vectorIcon: {
    height: "46.94%",
    width: "8.03%",
    top: "28.06%",
    right: "2.34%",
    bottom: "25%",
    left: "89.63%",
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
    top: 106,
    left: 26,
    height: 36,
    width: 299,
    position: "absolute",
  },
  vectorIcon3: {
    height: "33.33%",
    width: "4.7%",
    top: "12.82%",
    right: "93.96%",
    bottom: "53.85%",
    left: "1.34%",
  },
  activitiesNotifications: {
    width: 197,
    fontSize: FontSize.size_mid,
    left: 27,
    fontFamily: FontFamily.nunito,
    color: Color.colorBlack,
    top: 0,
  },
  peopleYouFollow: {
    top: 23,
    fontSize: FontSize.size_3xs,
    color: Color.colorSilver_200,
    width: 275,
    fontFamily: FontFamily.nunito,
    left: 0,
  },
  vectorIcon4: {
    height: "43.59%",
    width: "8.05%",
    top: "15.38%",
    right: "2.01%",
    bottom: "41.03%",
    left: "89.93%",
  },
  activitiesChild: {
    top: 39,
    width: 298,
  },
  activities: {
    height: "27.46%",
    width: "91.69%",
    top: "33.1%",
    right: "0.31%",
    bottom: "39.44%",
    left: "8%",
    position: "absolute",
  },
  notifications: {
    top: 161,
    left: -1,
    width: 325,
    height: 142,
    position: "absolute",
  },
});

export default EmailNotificationsContainer;
