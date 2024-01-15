import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import ContainerHeader from "../components/ContainerHeader";
import CardContainer3 from "../components/CardContainer3";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color } from "../GlobalStyles";

const HomeUser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeUser}>
      <ContainerHeader
        userIdentification="ID : 5775341"
        greetingMessage="Halo!, Rizky"
      />
      <CardContainer3 />
      <View style={[styles.homeUserChild, styles.barcodeLayout]} />
      <Image
        style={[styles.homeIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("AbsensiQR1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/barcode4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
        onPress={() => navigation.navigate("Acount2")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/akun.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.notification, styles.newsPosition]}
        onPress={() => navigation.navigate("Notification1")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.news, styles.newsPosition]}
        onPress={() => navigation.navigate("News3")}
      >
        <Image
          style={[styles.icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/news.png")}
        />
      </Pressable>
      <Image
        style={[styles.homeUserItem, styles.accountLayout]}
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
    width: "8%",
    height: "3.69%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  homeUserChild: {
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
    width: "8%",
    height: "3.69%",
    position: "absolute",
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
  notification: {
    left: "65.07%",
    right: "26.93%",
  },
  news: {
    left: "27.47%",
    right: "64.53%",
  },
  homeUserItem: {
    left: 32,
    height: 6,
    top: 762,
  },
  homeUser: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeUser;
