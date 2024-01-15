import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import SectionCard from "../components/SectionCard";
import SectionForm from "../components/SectionForm";
import SectionCard1 from "../components/SectionCard1";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const LaporanTargetSampah1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporanTargetSampah}>
      <View style={[styles.laporanTargetSampahChild, styles.childLayout]} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-18}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.iconchevronLeft}
        onPress={() => navigation.navigate("Administrasi")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-left6.png")}
        />
      </Pressable>
      <Text style={styles.rekapitulasiLaporanSampah}>
        Rekapitulasi Laporan Sampah
      </Text>
      <View style={[styles.laporanTargetSampahItem, styles.barcodeLayout]} />
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomeAdmin")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("AbsensiQR")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/barcode.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
        onPress={() => navigation.navigate("Acount")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/account.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.news, styles.homePosition]}
        onPress={() => navigation.navigate("News2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/news.png")}
        />
      </Pressable>
      <Image
        style={[styles.laporanTargetSampahInner, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
      />
      <Image
        style={[styles.administrasiIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/administrasi.png")}
      />
      <View style={styles.google}>
        <View style={[styles.googleChild, styles.iconLayout1]} />
        <Text style={styles.pencarian}>Pencarian</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <SectionCard
          imageAltText={require("../assets/line-241.png")}
          imageDescription={require("../assets/line-241.png")}
          imageDimensions={require("../assets/line-241.png")}
          imageIdentifier={require("../assets/line-241.png")}
          rectangleIconTop={197}
          rectangleIconLeft={3}
        />
        <SectionForm propTop={393} propLeft={3} />
        <SectionCard1
          imageAltText={require("../assets/line-241.png")}
          imageDescription={require("../assets/line-241.png")}
          imageDimensions={require("../assets/line-241.png")}
          imageIdentifier={require("../assets/line-241.png")}
          propTop={0}
          propLeft={0}
        />
      </View>
      <View style={styles.rectangleView} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>...</Text>
      <Image
        style={[styles.iconchevronLeft1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconchevron-left1.png")}
      />
      <Image
        style={styles.iconchevronLeft2}
        contentFit="cover"
        source={require("../assets/iconchevron-left7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
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
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  textTypo: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    top: 724,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  laporanTargetSampahChild: {
    top: -15,
    left: -2,
    backgroundColor: Color.colorDarkslategray_100,
    width: 377,
    height: 118,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconchevronLeft: {
    left: "5.33%",
    top: "6.48%",
    right: "91.12%",
    bottom: "91.1%",
    width: "3.55%",
    height: "2.43%",
    position: "absolute",
  },
  rekapitulasiLaporanSampah: {
    top: 74,
    left: 62,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    width: 272,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  laporanTargetSampahItem: {
    left: 0,
    width: 375,
    backgroundColor: Color.colorWhite,
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
  laporanTargetSampahInner: {
    left: 243,
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
  googleChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  pencarian: {
    height: "54.23%",
    width: "19.3%",
    top: "8.08%",
    left: "15.2%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  vectorIcon: {
    height: "57.69%",
    width: "4.39%",
    top: "19.23%",
    right: "91.81%",
    bottom: "23.08%",
    left: "3.8%",
    position: "absolute",
  },
  google: {
    height: "3.2%",
    width: "91.2%",
    top: "14.16%",
    right: "4.53%",
    bottom: "82.64%",
    left: "4.27%",
    position: "absolute",
  },
  groupParent: {
    top: 153,
    left: 12,
    width: 348,
    height: 568,
    position: "absolute",
  },
  rectangleView: {
    top: 723,
    left: 42,
    backgroundColor: Color.colorGainsboro_100,
    width: 19,
    height: 20,
    position: "absolute",
  },
  text: {
    left: 50,
  },
  text1: {
    left: 83,
  },
  text2: {
    left: 113,
  },
  text3: {
    left: 136,
  },
  iconchevronLeft1: {
    height: "1.8%",
    width: "2.67%",
    top: "89.04%",
    right: "92.53%",
    bottom: "9.16%",
    left: "4.8%",
    position: "absolute",
  },
  iconchevronLeft2: {
    marginTop: 318,
    width: "2.69%",
    top: "50%",
    right: "53.04%",
    left: "44.27%",
    height: 15,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  laporanTargetSampah: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaporanTargetSampah1;
