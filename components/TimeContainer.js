import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "./ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const TimeContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, styles.headerPosition]}>
      <View style={[styles.headerChild, styles.headerPosition]} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={414}
        themeDarkNotchTrueCallIHeight={44}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={0}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("News2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector27.png")}
        />
      </Pressable>
      <Text style={styles.news}>News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerPosition: {
    height: 105,
    top: 0,
    position: "absolute",
  },
  headerChild: {
    left: 19,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 375,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vector: {
    left: "9.01%",
    top: "49.52%",
    right: "87.85%",
    bottom: "31.43%",
    width: "3.14%",
    height: "19.05%",
    position: "absolute",
  },
  news: {
    top: 69,
    left: 169,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    color: Color.colorWhite,
    textAlign: "left",
    width: 75,
    height: 18,
    position: "absolute",
  },
  header: {
    left: -19,
    width: 414,
  },
});

export default TimeContainer;
