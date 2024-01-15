import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import FormContainer4 from "../components/FormContainer4";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Laporan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporan}>
      <View style={styles.laporanChild} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-22}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.iconchevronLeft}
        onPress={() => navigation.navigate("HomeSuperuser")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/iconchevron-left4.png")}
        />
      </Pressable>
      <Text style={styles.laporan1}>Laporan</Text>
      <View style={[styles.laporanItem, styles.barcodeLayout]} />
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomeSuperuser")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("GPSScreen")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/barcode2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
        onPress={() => navigation.navigate("Acount1")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/account.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.news, styles.homePosition]}
        onPress={() => navigation.navigate("News1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/news.png")}
        />
      </Pressable>
      <Image
        style={[styles.laporanInner, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
      />
      <Image
        style={[styles.administrasiIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/administrasi.png")}
      />
      <FormContainer4 />
    </View>
  );
};

const styles = StyleSheet.create({
  barcodeLayout: {
    height: 50,
    position: "absolute",
  },
  homePosition: {
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
    position: "absolute",
  },
  accountLayout: {
    width: 30,
    position: "absolute",
  },
  laporanChild: {
    top: -15,
    left: -2,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 377,
    height: 118,
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconchevronLeft: {
    left: "5.07%",
    top: "6.4%",
    right: "91.39%",
    bottom: "91.11%",
    width: "3.55%",
    height: "2.49%",
    position: "absolute",
  },
  laporan1: {
    top: 67,
    left: 44,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    color: Color.colorWhite,
    textAlign: "center",
    width: 272,
    position: "absolute",
  },
  laporanItem: {
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 375,
    top: 762,
  },
  home: {
    left: "8.53%",
    right: "83.47%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  barcode: {
    left: 165,
    top: 750,
    width: 50,
  },
  account: {
    left: 318,
    top: 773,
    height: 30,
  },
  news: {
    left: "27.47%",
    right: "64.53%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  laporanInner: {
    left: 244,
    height: 6,
    top: 762,
  },
  administrasiIcon: {
    width: "6.4%",
    right: "27.73%",
    left: "65.87%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  laporan: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Laporan;
