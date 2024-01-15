import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const News3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.news}>
      <View style={[styles.scrollnews, styles.newsListLayout]}>
        <View style={[styles.newsList, styles.newsListLayout]}>
          <Pressable
            style={[styles.news1, styles.newsLayout1]}
            onPress={() => navigation.navigate("Newsletter3")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/news1.png")}
            />
          </Pressable>
          <Image
            style={[styles.news1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/news11.png")}
          />
          <Pressable
            style={[styles.news2, styles.news2Layout]}
            onPress={() => navigation.navigate("Newsletter3")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/news2.png")}
            />
          </Pressable>
          <Image
            style={[styles.news2Icon, styles.news2Layout]}
            contentFit="cover"
            source={require("../assets/news21.png")}
          />
          <Pressable
            style={[styles.news3, styles.newsPosition]}
            onPress={() => navigation.navigate("Newsletter3")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/news3.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.news4, styles.news4Layout]}
            onPress={() => navigation.navigate("Newsletter3")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/news42.png")}
            />
          </Pressable>
          <Image
            style={[styles.news4Icon, styles.news4Layout]}
            contentFit="cover"
            source={require("../assets/news41.png")}
          />
          <Pressable
            style={[styles.news5, styles.newsPosition]}
            onPress={() => navigation.navigate("Newsletter3")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/news5.png")}
            />
          </Pressable>
          <Image
            style={[styles.news5Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/news51.png")}
          />
          <Pressable
            style={[styles.news6, styles.newsLayout1]}
            onPress={() => navigation.navigate("Newsletter3")}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/news62.png")}
            />
          </Pressable>
          <Image
            style={[styles.news6Icon, styles.newsLayout1]}
            contentFit="cover"
            source={require("../assets/news61.png")}
          />
        </View>
      </View>
      <View style={[styles.newsChild, styles.newsLayout]} />
      <Text style={styles.news7}>News</Text>
      <Pressable
        style={[styles.vector, styles.vectorLayout]}
        onPress={() => navigation.navigate("HomeUser")}
      >
        <Image
          style={[styles.icon6, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector33.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector29.png")}
      />
      <View style={styles.tiitkTiga}>
        <View style={[styles.tiitkTigaChild, styles.tiitkLayout]} />
        <View style={[styles.tiitkTigaItem, styles.tiitkLayout]} />
        <View style={[styles.tiitkTigaInner, styles.tiitkLayout]} />
      </View>
      <View style={[styles.newsItem, styles.barcodeLayout]} />
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomeUser")}
      >
        <Image
          style={[styles.icon6, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("AbsensiQR1")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/barcode.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
        onPress={() => navigation.navigate("Acount2")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/account.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.notification, styles.homePosition]}
        onPress={() => navigation.navigate("Notification1")}
      >
        <Image
          style={[styles.icon6, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/notification1.png")}
        />
      </Pressable>
      <Image
        style={[styles.newsIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/news.png")}
      />
      <Image
        style={[styles.newsInner, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
      />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={414}
        themeDarkNotchTrueCallIHeight={44}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newsListLayout: {
    width: 350,
    position: "absolute",
  },
  newsLayout1: {
    width: 165,
    height: 233,
    position: "absolute",
  },
  iconPosition: {
    left: 176,
    width: 165,
    position: "absolute",
  },
  news2Layout: {
    width: 166,
    height: 125,
    position: "absolute",
  },
  newsPosition: {
    top: 378,
    height: 233,
    width: 165,
    position: "absolute",
  },
  news4Layout: {
    width: 167,
    position: "absolute",
  },
  newsLayout: {
    width: 375,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  vectorLayout: {
    height: "2.46%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  tiitkLayout: {
    height: 5,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    width: 23,
    left: 0,
    position: "absolute",
  },
  barcodeLayout: {
    height: 50,
    position: "absolute",
  },
  homePosition: {
    height: "3.69%",
    width: "8%",
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
  news1: {
    top: 2,
    height: 233,
    left: 3,
  },
  news1Icon: {
    top: 622,
    height: 233,
  },
  news2: {
    height: 125,
    left: 184,
    top: 0,
  },
  news2Icon: {
    height: 125,
    top: 622,
    left: 3,
  },
  news3: {
    left: 3,
  },
  news4: {
    left: 1,
    top: 244,
    height: 125,
  },
  news4Icon: {
    top: 999,
    height: 113,
    left: 0,
  },
  news5: {
    left: 184,
  },
  news5Icon: {
    top: 865,
    height: 251,
  },
  news6: {
    top: 134,
    left: 184,
    height: 233,
  },
  news6Icon: {
    top: 759,
    height: 233,
    left: 3,
  },
  newsList: {
    height: 1116,
    left: 0,
    top: 0,
  },
  scrollnews: {
    top: 138,
    left: 5,
    height: 616,
  },
  newsChild: {
    height: 138,
    top: 0,
    position: "absolute",
  },
  news7: {
    top: 69,
    left: 162,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    color: Color.colorBlack,
    textAlign: "left",
    width: 51,
    height: 18,
    position: "absolute",
  },
  icon6: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "4.88%",
    top: "6.4%",
    right: "91.65%",
    bottom: "91.13%",
    width: "3.47%",
  },
  vectorIcon: {
    width: "5.33%",
    top: "13.55%",
    right: "6.13%",
    bottom: "83.99%",
    left: "88.53%",
    height: "2.46%",
    position: "absolute",
  },
  tiitkTigaChild: {
    top: 0,
  },
  tiitkTigaItem: {
    top: 8,
  },
  tiitkTigaInner: {
    top: 15,
  },
  tiitkTiga: {
    top: 110,
    left: 18,
    height: 20,
    width: 23,
    position: "absolute",
  },
  newsItem: {
    top: 762,
    width: 375,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  home: {
    left: "8.53%",
    right: "83.47%",
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
  notification: {
    left: "65.07%",
    right: "26.93%",
  },
  newsIcon: {
    right: "64.53%",
    left: "27.47%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  newsInner: {
    top: 763,
    left: 103,
    height: 6,
  },
  news: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default News3;
