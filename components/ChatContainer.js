import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ChatContainer = () => {
  return (
    <View style={styles.chat}>
      <Text style={[styles.smashy, styles.smashyTypo]}>Smashy</Text>
      <Image
        style={[styles.chatChild, styles.chatLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4180.png")}
      />
      <Image
        style={[styles.chatItem, styles.chatLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4181.png")}
      />
      <Text style={[styles.haidarRais, styles.smashyTypo]}>Haidar Rais</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  smashyTypo: {
    height: 9,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 10,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  chatLayout: {
    height: 38,
    position: "absolute",
  },
  smashy: {
    top: 0,
    left: 9,
    width: 45,
  },
  chatChild: {
    top: 13,
    left: 0,
    width: 105,
  },
  chatItem: {
    top: 189,
    left: 151,
    width: 176,
  },
  haidarRais: {
    top: 180,
    left: 262,
    width: 54,
  },
  chat: {
    top: 124,
    left: 24,
    width: 327,
    height: 227,
    position: "absolute",
  },
});

export default ChatContainer;
