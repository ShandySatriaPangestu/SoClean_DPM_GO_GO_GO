import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import FormContainer3 from "../components/FormContainer3";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Crew = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.crew}>
      <View style={styles.crewChild} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={-1}
        themeDarkNotchTrueCallILeft={-18}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.iconchevronLeft}
        onPress={() => navigation.navigate("HomeAdmin")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-left3.png")}
        />
      </Pressable>
      <Text style={styles.crew1}>Crew</Text>
      <View style={[styles.crewItem, styles.barcodeLayout]} />
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
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/barcode.png")}
        />
      </Pressable>
      <Pressable
        style={styles.account}
        onPress={() => navigation.navigate("Acount")}
      >
        <Image
          style={styles.iconLayout}
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
      <Pressable
        style={[styles.administrasi, styles.homePosition]}
        onPress={() => navigation.navigate("Administrasi")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/administrasi.png")}
        />
      </Pressable>
      <FormContainer3 />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: "100%",
    width: "100%",
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
  crewChild: {
    top: -15,
    left: -2,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 377,
    height: 118,
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconchevronLeft: {
    left: "4.53%",
    top: "5.79%",
    right: "91.92%",
    bottom: "91.79%",
    width: "3.55%",
    height: "2.43%",
    position: "absolute",
  },
  crew1: {
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
  crewItem: {
    top: 762,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 375,
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
    width: 30,
    height: 30,
    position: "absolute",
  },
  news: {
    left: "27.47%",
    right: "64.53%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  administrasi: {
    left: "65.87%",
    right: "27.73%",
    width: "6.4%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  crew: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Crew;
