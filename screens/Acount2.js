import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import PrivacyFormContainer from "../components/PrivacyFormContainer";
import EmailNotificationsContainer from "../components/EmailNotificationsContainer";
import LocationForm from "../components/LocationForm";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Acount2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.acount}>
      <View style={[styles.frameProfile, styles.listLayout]}>
        <View style={styles.frameProfileChild} />
        <View style={[styles.list, styles.listPosition]}>
          <PrivacyFormContainer vectorIconTop={331} vectorIconLeft={0} />
          <EmailNotificationsContainer />
          <LocationForm />
        </View>
      </View>
      <View style={[styles.property, styles.propertyLayout]}>
        <Image
          style={[styles.propertyChild, styles.propertyLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <View style={[styles.profile, styles.profileLayout]}>
          <Image
            style={[styles.characterbadrun6Icon, styles.profileLayout]}
            contentFit="cover"
            source={require("../assets/characterbadrun-61.png")}
          />
        </View>
        <Text style={[styles.edit, styles.editLayout]}>Edit</Text>
      </View>
      <View style={[styles.acountChild, styles.barcodeLayout]} />
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomeUser")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("AbsensiQR1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/barcode8.png")}
        />
      </Pressable>
      <Image
        style={[styles.accountIcon, styles.acountItemPosition]}
        contentFit="cover"
        source={require("../assets/account2.png")}
      />
      <Pressable
        style={[styles.notification, styles.homePosition]}
        onPress={() => navigation.navigate("Notification1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notification2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.news, styles.homePosition]}
        onPress={() => navigation.navigate("News3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/news8.png")}
        />
      </Pressable>
      <Image
        style={[styles.acountItem, styles.acountItemPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-41431.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.editLayout]}
        onPress={() => navigation.navigate("HomeUser")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/ellipse-140.png")}
        />
      </Pressable>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomeUser")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector45.png")}
        />
      </Pressable>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listLayout: {
    width: 325,
    position: "absolute",
  },
  listPosition: {
    top: 0,
    left: 0,
  },
  propertyLayout: {
    width: 495,
    position: "absolute",
  },
  profileLayout: {
    height: 130,
    width: 134,
    position: "absolute",
  },
  editLayout: {
    width: 35,
    position: "absolute",
  },
  barcodeLayout: {
    height: 54,
    position: "absolute",
  },
  homePosition: {
    height: "3.99%",
    width: "8%",
    bottom: "1.19%",
    top: "94.82%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  acountItemPosition: {
    width: 30,
    left: 318,
    position: "absolute",
  },
  frameProfileChild: {
    top: -19,
    left: -23,
    width: 373,
    height: 612,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  list: {
    height: 607,
    left: 0,
    width: 325,
    position: "absolute",
  },
  frameProfile: {
    top: 225,
    left: 25,
    height: 534,
  },
  propertyChild: {
    height: 495,
    left: 0,
    top: 0,
  },
  characterbadrun6Icon: {
    borderRadius: Border.br_21xl,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  profile: {
    top: 410,
    left: 180,
  },
  edit: {
    top: 550,
    left: 228,
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.openSans,
    color: Color.colorBlack,
    textAlign: "left",
  },
  property: {
    top: -365,
    left: -58,
    height: 573,
  },
  acountChild: {
    width: 375,
    top: 758,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  home: {
    left: "8.53%",
    right: "83.47%",
  },
  barcode: {
    left: 165,
    top: 745,
    width: 50,
  },
  accountIcon: {
    top: 770,
    height: 32,
  },
  notification: {
    left: "65.07%",
    right: "26.93%",
  },
  news: {
    left: "27.47%",
    right: "64.53%",
  },
  acountItem: {
    height: 7,
    top: 758,
  },
  wrapper: {
    left: 7,
    top: 45,
    height: 35,
  },
  vector: {
    left: "4.8%",
    top: "6.4%",
    right: "91.65%",
    bottom: "91.11%",
    width: "3.55%",
    height: "2.49%",
    position: "absolute",
  },
  acount: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Acount2;
