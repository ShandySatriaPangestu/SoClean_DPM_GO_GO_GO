import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import PrivacyFormContainer2 from "../components/PrivacyFormContainer2";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Acount1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.acount}>
      <PrivacyFormContainer2 />
      <View style={[styles.property, styles.propertyLayout]}>
        <Image
          style={[styles.propertyChild, styles.propertyChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
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
        onPress={() => navigation.navigate("HomeSuperuser")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/home.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("GPSScreen")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/barcode7.png")}
        />
      </Pressable>
      <Image
        style={[styles.accountIcon, styles.acountItemPosition]}
        contentFit="cover"
        source={require("../assets/account1.png")}
      />
      <Pressable
        style={[styles.news, styles.homePosition]}
        onPress={() => navigation.navigate("News1")}
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
        style={styles.administrasi}
        onPress={() => navigation.navigate("Laporan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/administrasi.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wrapper, styles.editLayout]}
        onPress={() => navigation.navigate("HomeSuperuser")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/ellipse-140.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector45.png")}
      />
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
  propertyLayout: {
    width: 495,
    position: "absolute",
  },
  propertyChildPosition: {
    top: 0,
    left: 0,
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  acountItemPosition: {
    width: 30,
    left: 318,
    position: "absolute",
  },
  propertyChild: {
    height: 495,
    left: 0,
    width: 495,
    position: "absolute",
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
    height: 54,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  home: {
    left: "8.53%",
    right: "83.47%",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
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
  news: {
    left: "27.47%",
    right: "64.53%",
  },
  acountItem: {
    height: 7,
    top: 758,
  },
  administrasi: {
    left: "65.87%",
    top: "94.58%",
    right: "27.73%",
    bottom: "1.72%",
    width: "6.4%",
    height: "3.69%",
    position: "absolute",
  },
  wrapper: {
    left: 7,
    top: 45,
    height: 35,
  },
  vectorIcon: {
    height: "2.49%",
    width: "3.55%",
    top: "6.4%",
    right: "91.65%",
    bottom: "91.11%",
    left: "4.8%",
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

export default Acount1;
