import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CustomerService4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.customerService4}>
      <View style={[styles.customerService4Child, styles.customerPosition]} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Administrasi")}
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
      <View style={[styles.customerService4Item, styles.customerPosition]} />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("CustomerService3")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/rectangle-4183.png")}
        />
      </Pressable>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>+</Text>
      <Image
        style={[styles.iconKamera, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icon-kamera.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  customerPosition: {
    width: 375,
    backgroundColor: Color.colorDarkslategray_100,
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
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  customerService4Child: {
    top: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    height: 105,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  customerService4Item: {
    top: 761,
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
  },
  icon1: {
    borderRadius: Border.br_xl,
  },
  wrapper: {
    left: 90,
    top: 774,
    width: 241,
    height: 25,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.34%",
    width: "3.73%",
    top: "95.69%",
    right: "4.53%",
    bottom: "1.97%",
    left: "91.73%",
    position: "absolute",
  },
  text: {
    top: 771,
    left: 16,
    fontSize: FontSize.size_29xl,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
  },
  iconKamera: {
    height: "2.96%",
    width: "6.4%",
    top: "95.32%",
    right: "79.47%",
    bottom: "1.72%",
    left: "14.13%",
    position: "absolute",
  },
  customerService4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default CustomerService4;
