import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NewsCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vectorPosition}>
      <View style={[styles.vectorChild, styles.vectorPosition]} />
      <Text style={styles.news}>News</Text>
      <Pressable
        style={[styles.vector1, styles.vectorLayout]}
        onPress={() => navigation.navigate("HomeAdmin")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector28.png")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  vectorPosition: {
    height: 138,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  vectorLayout: {
    height: "14.49%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  tiitkLayout: {
    height: 5,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    width: 23,
    left: 0,
    position: "absolute",
  },
  vectorChild: {
    backgroundColor: Color.colorWhite,
  },
  news: {
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
  icon: {
    height: "100%",
    width: "100%",
  },
  vector1: {
    left: "4.88%",
    top: "37.68%",
    right: "91.65%",
    bottom: "47.83%",
    width: "3.47%",
  },
  vectorIcon: {
    width: "5.33%",
    top: "79.71%",
    right: "6.13%",
    bottom: "5.8%",
    left: "88.53%",
    height: "14.49%",
    position: "absolute",
  },
  tiitkTigaChild: {
    top: 0,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
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
});

export default NewsCard;
