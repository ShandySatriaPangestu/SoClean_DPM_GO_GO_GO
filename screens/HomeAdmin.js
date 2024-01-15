import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import ContainerHeader from "../components/ContainerHeader";
import CardContainer2 from "../components/CardContainer2";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color } from "../GlobalStyles";

const HomeAdmin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeAdmin}>
      <ContainerHeader
        userIdentification="ID : 4420153"
        greetingMessage="Halo!, Roby"
      />
      <CardContainer2 />
      <View style={[styles.homeAdminChild, styles.barcodeLayout]} />
      <Image
        style={[styles.homeIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("AbsensiQR")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/barcode4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
        onPress={() => navigation.navigate("Acount")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/akun.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.administrasi, styles.newsPosition]}
        onPress={() => navigation.navigate("Administrasi")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/administrasi.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.news, styles.newsPosition]}
        onPress={() => navigation.navigate("News2")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/news.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeAdminItem, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
      />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={414}
        themeDarkNotchTrueCallIHeight={44}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="#276561"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barcodeLayout: {
    height: 50,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  accountLayout: {
    width: 30,
    position: "absolute",
  },
  newsPosition: {
    bottom: "1.11%",
    top: "95.2%",
    height: "3.69%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  homeAdminChild: {
    left: 0,
    width: 375,
    top: 762,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  homeIcon: {
    right: "83.47%",
    left: "8.53%",
    bottom: "1.11%",
    top: "95.2%",
    height: "3.69%",
    position: "absolute",
    width: "8%",
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
  icon2: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  administrasi: {
    left: "65.87%",
    right: "27.73%",
    width: "6.4%",
    top: "95.2%",
    height: "3.69%",
  },
  news: {
    left: "27.47%",
    right: "64.53%",
    width: "8%",
    top: "95.2%",
    height: "3.69%",
  },
  homeAdminItem: {
    left: 32,
    height: 6,
    top: 762,
  },
  homeAdmin: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeAdmin;
