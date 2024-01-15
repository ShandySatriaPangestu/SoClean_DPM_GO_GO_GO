import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import ChatContainer from "../components/ChatContainer";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CustomerService2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerService2}>
      <View
        style={[styles.customerService2Child, styles.chatingChildPosition]}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomeUser")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
      </Pressable>
      <Text style={[styles.customerService, styles.textTypo]}>
        Customer Service
      </Text>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <View style={[styles.chating, styles.chatingChildPosition]}>
        <View style={[styles.chatingChild, styles.chatingChildPosition]} />
        <Image
          style={styles.chatingItem}
          contentFit="cover"
          source={require("../assets/rectangle-4183.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>+</Text>
        <View style={styles.chatingInner} />
        <Image
          style={[styles.iconKamera, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon-kamera.png")}
        />
      </View>
      <ChatContainer />
      <Image
        style={styles.image11Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Image
        style={[styles.profileIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/profile.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatingChildPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  customerService2Child: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 105,
    backgroundColor: Color.colorDarkslategray_100,
    width: 375,
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vector: {
    left: "4.8%",
    top: "6.4%",
    right: "91.65%",
    bottom: "91.11%",
    width: "3.55%",
    height: "2.49%",
    position: "absolute",
  },
  customerService: {
    height: "2.22%",
    width: "38.67%",
    top: "8.5%",
    left: "30.67%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    textAlign: "left",
  },
  chatingChild: {
    top: 579,
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 51,
    backgroundColor: Color.colorDarkslategray_100,
    width: 375,
    left: 0,
  },
  chatingItem: {
    top: 592,
    left: 90,
    borderRadius: Border.br_xl,
    width: 241,
    height: 25,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.02%",
    width: "3.73%",
    top: "94.44%",
    right: "4.53%",
    bottom: "2.54%",
    left: "91.73%",
    position: "absolute",
  },
  text: {
    top: 589,
    left: 16,
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  chatingInner: {
    left: 31,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    width: 165,
    height: 109,
    top: 0,
    position: "absolute",
  },
  iconKamera: {
    height: "3.81%",
    width: "6.4%",
    top: "93.97%",
    right: "79.47%",
    bottom: "2.22%",
    left: "14.13%",
    position: "absolute",
  },
  chating: {
    top: 182,
    height: 630,
    width: 375,
    left: 0,
  },
  image11Icon: {
    top: 167,
    left: 2,
    borderRadius: Border.br_71xl,
    width: 20,
    height: 20,
    position: "absolute",
  },
  profileIcon: {
    height: "2.46%",
    width: "5.33%",
    top: "37.19%",
    right: "0%",
    bottom: "60.34%",
    left: "94.67%",
    position: "absolute",
  },
  customerService2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CustomerService2;
